package com.kisannexus.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// Commented by agent, reason: Removed unused import after switching to csrf -> csrf.disable()
// import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
// End commented by agent
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
// Commented by agent, reason: Replaced with lambda syntax to avoid nullability warnings, and added formLogin/httpBasic
//          .csrf(AbstractHttpConfigurer::disable)
//          .authorizeHttpRequests(auth -> auth
//              .requestMatchers("/", "/api/auth/otp/**").permitAll()
//              .anyRequest().authenticated()
//          );
// End commented by agent
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/otp/**", "/api/auth/register").permitAll()
                .anyRequest().authenticated()
            )
            .formLogin(org.springframework.security.config.Customizer.withDefaults())
            .httpBasic(org.springframework.security.config.Customizer.withDefaults());

        return http.build();
    }
}
