package com.kisannexus.authentication.otp.dto;

import com.kisannexus.authentication.otp.OtpPurpose;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class SendOtpRequest {

    @NotBlank(message = "Destination cannot be blank")
    @Size(max = 255, message = "Destination is too long")
    private String destination;

    @NotNull(message = "Purpose is required")
    private OtpPurpose purpose;

    public SendOtpRequest() {
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public OtpPurpose getPurpose() {
        return purpose;
    }

    public void setPurpose(OtpPurpose purpose) {
        this.purpose = purpose;
    }
}
