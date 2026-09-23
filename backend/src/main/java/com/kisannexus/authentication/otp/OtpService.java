package com.kisannexus.authentication.otp;

public interface OtpService {

    void sendOtp(String destination, OtpPurpose purpose);

    boolean verifyOtp(
            String destination,
            String otp,
            OtpPurpose purpose
    );

    void resendOtp(
            String destination,
            OtpPurpose purpose
    );
}