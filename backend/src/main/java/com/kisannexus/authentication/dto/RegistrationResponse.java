package com.kisannexus.authentication.dto;

import com.kisannexus.common.enums.UserRole;

public class RegistrationResponse {

    private Long id;
    private String fullName;
    private String mobileNumber;
    private String email;
    private UserRole role;
    private String message;

    public RegistrationResponse() {
    }

    public RegistrationResponse(Long id,
                                String fullName,
                                String mobileNumber,
                                String email,
                                UserRole role,
                                String message) {
        this.id = id;
        this.fullName = fullName;
        this.mobileNumber = mobileNumber;
        this.email = email;
        this.role = role;
        this.message = message;
    }

    public Long getId() {
        return id;
    }

    public String getFullName() {
        return fullName;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public String getEmail() {
        return email;
    }

    public UserRole getRole() {
        return role;
    }

    public String getMessage() {
        return message;
    }
}