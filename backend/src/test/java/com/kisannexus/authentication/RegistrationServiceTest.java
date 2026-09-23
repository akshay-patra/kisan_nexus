package com.kisannexus.authentication;

import com.kisannexus.authentication.dto.RegisterRequest;
import com.kisannexus.authentication.otp.OtpPurpose;
import com.kisannexus.authentication.otp.OtpRepository;
import com.kisannexus.authentication.otp.OtpVerification;
import com.kisannexus.common.enums.UserRole;
import com.kisannexus.users.User;
import com.kisannexus.users.UserRepository;

// import com.kisannexus.users.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.ActiveProfiles;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@ActiveProfiles("test")
class RegistrationServiceTest {

    @Autowired
    private RegistrationService registrationService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private OtpRepository otpRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Test
    void shouldRegisterVerifiedFarmer() {

        String mobile = "9876543210";

        OtpVerification verification = new OtpVerification();
        verification.setDestination(mobile);
        verification.setPurpose(OtpPurpose.MOBILE_REGISTRATION);
        verification.setOtpHash(
                passwordEncoder.encode("123456"));
        verification.setExpiresAt(
                java.time.LocalDateTime.now().plusMinutes(5));
        verification.setAttempts(1);
        verification.setUsed(true);
        verification.setVerifiedAt(
                java.time.LocalDateTime.now());

        otpRepository.save(verification);

        RegisterRequest request = new RegisterRequest();

        request.setFullName("Test Farmer");
        request.setMobileNumber(mobile);
        request.setEmail("farmer@test.com");
        request.setPassword("StrongPassword123");
        request.setLocation("Solapur");
        request.setRole(UserRole.FARMER);

        System.out.println(
                        "TEST USER EXISTS: " +
                        userRepository.existsByMobileNumber(mobile));
        
        
        User user = registrationService.register(request);

        assertNotNull(user.getId());
        assertEquals("Test Farmer", user.getFullName());
        assertEquals(mobile, user.getMobileNumber());
        assertEquals(UserRole.FARMER, user.getRole());

        assertTrue(user.getMobileVerified());
        assertFalse(user.getEmailVerified());
        assertTrue(user.getActive());

        assertNotEquals(
                "StrongPassword123",
                user.getPasswordHash());

        assertTrue(
                passwordEncoder.matches(
                        "StrongPassword123",
                        user.getPasswordHash()));
    }

    @Test
    void shouldRejectRegistrationWhenMobileIsNotVerified() {

            RegisterRequest request = new RegisterRequest();

            request.setFullName("Unverified Farmer");
            request.setMobileNumber("9999999999");
            request.setEmail("unverified@test.com");
            request.setPassword("StrongPassword123");
            request.setLocation("Solapur");
            request.setRole(UserRole.FARMER);

            IllegalArgumentException exception = assertThrows(
                            IllegalArgumentException.class,
                            () -> registrationService.register(request));

            assertEquals(
                            "Mobile number has not been verified",
                            exception.getMessage());
    }
}