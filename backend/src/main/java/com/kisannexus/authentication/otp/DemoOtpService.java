package com.kisannexus.authentication.otp;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
// import java.util.Random;

@Service
public class DemoOtpService implements OtpService {

    private static final int OTP_EXPIRY_MINUTES = 5;
    private static final int MAX_ATTEMPTS = 5;
    private final OtpRepository otpRepository;
    private final PasswordEncoder passwordEncoder;

    public DemoOtpService(
            OtpRepository otpRepository,
            PasswordEncoder passwordEncoder
    ) {
        this.otpRepository = otpRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    @Transactional
    public void sendOtp(
            String destination,
            OtpPurpose purpose
    ) {

        String otp = generateDemoOtp();

        OtpVerification verification = new OtpVerification();

        verification.setDestination(destination);
        verification.setPurpose(purpose);
        verification.setOtpHash(passwordEncoder.encode(otp));
        verification.setExpiresAt(
                LocalDateTime.now().plusMinutes(OTP_EXPIRY_MINUTES)
        );
        verification.setAttempts(0);
        verification.setUsed(false);

        otpRepository.save(verification);

        System.out.println(
                "[DEMO OTP] Destination: " + destination
                        + " | Purpose: " + purpose
                        + " | OTP: " + otp
        );
    }

    @Override
    @Transactional
    public boolean verifyOtp(
            String destination,
            String otp,
            OtpPurpose purpose
    ) {

        OtpVerification verification =
                otpRepository
                        .findTopByDestinationAndPurposeAndUsedFalseOrderByCreatedAtDesc(
                                destination,
                                purpose
                        )
                        .orElse(null);

        if (verification == null) {
            return false;
        }

        if (verification.getUsed()) {
            return false;
        }

        if (verification.getExpiresAt().isBefore(LocalDateTime.now())) {
            return false;
        }

        if (verification.getAttempts() >= MAX_ATTEMPTS) {
            return false;
        }

        verification.setAttempts(
                verification.getAttempts() + 1
        );

        boolean valid = passwordEncoder.matches(
                otp,
                verification.getOtpHash()
        );

        // if (valid) {
        //     verification.setUsed(true);
        // }

        if (valid) {
            verification.setUsed(true);
            verification.setVerifiedAt(LocalDateTime.now());
        }

        otpRepository.save(verification);

        return valid;
    }

    @Override
    public void resendOtp(
            String destination,
            OtpPurpose purpose
    ) {

        sendOtp(destination, purpose);
    }

    // private String generateDemoOtp() {

    //     return String.format(
    //             "%06d",
    //             new Random().nextInt(1_000_000)
    //     );
    // }

    private String generateDemoOtp() {
        return "123456";
    }
}