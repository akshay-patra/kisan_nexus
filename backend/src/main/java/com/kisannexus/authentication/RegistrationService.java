package com.kisannexus.authentication;

import com.kisannexus.authentication.dto.RegisterRequest;
import com.kisannexus.authentication.otp.OtpPurpose;
import com.kisannexus.authentication.otp.OtpRepository;
import com.kisannexus.authentication.otp.OtpVerification;
import com.kisannexus.common.enums.UserRole;
import com.kisannexus.users.User;
import com.kisannexus.users.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class RegistrationService {

    private final UserRepository userRepository;
    private final OtpRepository otpRepository;
    private final PasswordEncoder passwordEncoder;

    public RegistrationService(
            UserRepository userRepository,
            OtpRepository otpRepository,
            PasswordEncoder passwordEncoder
    ) {
        this.userRepository = userRepository;
        this.otpRepository = otpRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Transactional
    public User register(RegisterRequest request) {

        // 1. Prevent duplicate mobile numbers
        if (userRepository.existsByMobileNumber(request.getMobileNumber())) {
            throw new IllegalArgumentException(
                    "Mobile number is already registered"
            );
        }

        // 2. Prevent duplicate email addresses
        if (request.getEmail() != null
                && !request.getEmail().isBlank()
                && userRepository.existsByEmail(request.getEmail())) {

            throw new IllegalArgumentException(
                    "Email is already registered"
            );
        }

        // 3. Public registration must never create ADMIN users
        if (request.getRole() == UserRole.ADMIN) {
            throw new IllegalArgumentException(
                    "ADMIN registration is not allowed"
            );
        }

        // 4. Confirm mobile OTP was successfully verified
        OtpVerification verifiedOtp =
                otpRepository
                        .findTopByDestinationAndPurposeAndUsedTrueAndVerifiedAtIsNotNullOrderByCreatedAtDesc(
                                request.getMobileNumber(),
                                OtpPurpose.MOBILE_REGISTRATION
                        )
                        .orElse(null);

        if (verifiedOtp == null) {
            throw new IllegalArgumentException(
                    "Mobile number has not been verified"
            );
        }

        // 5. Create User
        User user = new User();

        user.setFullName(request.getFullName());
        user.setMobileNumber(request.getMobileNumber());
        user.setEmail(request.getEmail());
        user.setLocation(request.getLocation());
        user.setRole(request.getRole());

        // 6. NEVER store the raw password
        user.setPasswordHash(
                passwordEncoder.encode(request.getPassword())
        );

        // 7. Registration defaults
        user.setActive(true);
        user.setMobileVerified(true);
        user.setEmailVerified(false);

        return userRepository.save(user);
    }
}