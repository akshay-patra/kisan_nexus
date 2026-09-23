package com.kisannexus.authentication.otp;

import com.kisannexus.authentication.otp.dto.OtpResponse;
import com.kisannexus.authentication.otp.dto.ResendOtpRequest;
import com.kisannexus.authentication.otp.dto.SendOtpRequest;
import com.kisannexus.authentication.otp.dto.VerifyOtpRequest;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth/otp")
public class OtpController {

    private final OtpService otpService;

    public OtpController(OtpService otpService) {
        this.otpService = otpService;
    }

    @PostMapping("/send")
    public ResponseEntity<OtpResponse> sendOtp(@Valid @RequestBody SendOtpRequest request) {
        otpService.sendOtp(request.getDestination(), request.getPurpose());
        return ResponseEntity.ok(new OtpResponse(true, "OTP sent successfully"));
    }

    @PostMapping("/verify")
    public ResponseEntity<OtpResponse> verifyOtp(@Valid @RequestBody VerifyOtpRequest request) {
        boolean verified = otpService.verifyOtp(
                request.getDestination(),
                request.getOtp(),
                request.getPurpose()
        );

        if (verified) {
            return ResponseEntity.ok(new OtpResponse(true, "OTP verified successfully"));
        } else {
            return ResponseEntity.badRequest().body(new OtpResponse(false, "Invalid or expired OTP"));
        }
    }

    @PostMapping("/resend")
    public ResponseEntity<OtpResponse> resendOtp(@Valid @RequestBody ResendOtpRequest request) {
        otpService.resendOtp(request.getDestination(), request.getPurpose());
        return ResponseEntity.ok(new OtpResponse(true, "OTP resent successfully"));
    }
}
