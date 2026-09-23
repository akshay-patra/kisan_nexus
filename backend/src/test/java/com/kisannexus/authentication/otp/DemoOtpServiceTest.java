package com.kisannexus.authentication.otp;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class DemoOtpServiceTest {

    @Autowired
    private DemoOtpService otpService;

    @Autowired
    private OtpRepository otpRepository;

    @Autowired
    private org.springframework.security.crypto.password.PasswordEncoder passwordEncoder;

    @Test
    void shouldSendAndVerifyOtp() {

        String mobileNumber = "9876543210";

        otpService.sendOtp(
                mobileNumber,
                OtpPurpose.MOBILE_REGISTRATION
        );

        boolean result = otpService.verifyOtp(
                mobileNumber,
                "123456",
                OtpPurpose.MOBILE_REGISTRATION
        );

        assertTrue(result);
    }

    @Test
    void shouldRejectWrongOtp() {

        String mobileNumber = "9876543211";

        otpService.sendOtp(
                mobileNumber,
                OtpPurpose.MOBILE_REGISTRATION
        );

        boolean result = otpService.verifyOtp(
                mobileNumber,
                "999999",
                OtpPurpose.MOBILE_REGISTRATION
        );

        assertFalse(result);
    }

    @Test
    void shouldNotAllowOtpReuse() {

        String mobileNumber = "9876543212";

        otpService.sendOtp(
                mobileNumber,
                OtpPurpose.MOBILE_REGISTRATION
        );

        boolean firstAttempt = otpService.verifyOtp(
                mobileNumber,
                "123456",
                OtpPurpose.MOBILE_REGISTRATION
        );

        boolean secondAttempt = otpService.verifyOtp(
                mobileNumber,
                "123456",
                OtpPurpose.MOBILE_REGISTRATION
        );

        assertTrue(firstAttempt);
        assertFalse(secondAttempt);
    }

    @Test
    void shouldRejectExpiredOtp() {

        String mobileNumber = "9876543213";

        otpService.sendOtp(
                mobileNumber,
                OtpPurpose.MOBILE_REGISTRATION);

        OtpVerification verification = otpRepository
                .findTopByDestinationAndPurposeAndUsedFalseOrderByCreatedAtDesc(
                        mobileNumber,
                        OtpPurpose.MOBILE_REGISTRATION)
                .orElseThrow();

        verification.setExpiresAt(
                java.time.LocalDateTime.now().minusMinutes(1));

        otpRepository.save(verification);

        boolean result = otpService.verifyOtp(
                mobileNumber,
                "123456",
                OtpPurpose.MOBILE_REGISTRATION);

        assertFalse(result);
    }

    @Test
    void shouldRejectOtpAfterMaximumAttempts() {

        String mobileNumber = "9876543214";

        otpService.sendOtp(
                mobileNumber,
                OtpPurpose.MOBILE_REGISTRATION);

        for (int i = 0; i < 5; i++) {

            boolean result = otpService.verifyOtp(
                    mobileNumber,
                    "999999",
                    OtpPurpose.MOBILE_REGISTRATION);

            assertFalse(result);
        }

        boolean sixthAttempt = otpService.verifyOtp(
                mobileNumber,
                "123456",
                OtpPurpose.MOBILE_REGISTRATION);

        assertFalse(sixthAttempt);
    }

    @Test
    void shouldStoreOtpAsHash() {

        String mobileNumber = "9876543215";

        otpService.sendOtp(
                mobileNumber,
                OtpPurpose.MOBILE_REGISTRATION
        );

        OtpVerification verification =
                otpRepository
                        .findTopByDestinationAndPurposeAndUsedFalseOrderByCreatedAtDesc(
                                mobileNumber,
                                OtpPurpose.MOBILE_REGISTRATION
                        )
                        .orElseThrow();

        assertNotEquals(
                "123456",
                verification.getOtpHash()
        );

        assertTrue(
                passwordEncoder.matches(
                        "123456",
                        verification.getOtpHash()
                )
        );
    }
}