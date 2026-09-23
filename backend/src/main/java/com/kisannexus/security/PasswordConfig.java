package com.kisannexus.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
// Commented by agent, reason: Removed unused import after switching to DelegatingPasswordEncoder
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// End commented by agent
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class PasswordConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
// Commented by agent, reason: Replaced BCryptPasswordEncoder with DelegatingPasswordEncoder to support {noop} plaintext passwords in application.properties alongside BCrypt OTP hashes
//         return new BCryptPasswordEncoder();
// End commented by agent
        return org.springframework.security.crypto.factory.PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }
}
