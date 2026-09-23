package com.kisannexus.authentication.otp;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface OtpRepository extends JpaRepository<OtpVerification, Long> {

    Optional<OtpVerification> findTopByDestinationAndPurposeAndUsedFalseOrderByCreatedAtDesc(
            String destination,
            OtpPurpose purpose);

    Optional<OtpVerification> findTopByDestinationAndPurposeAndUsedTrueAndVerifiedAtIsNotNullOrderByCreatedAtDesc(
            String destination,
            OtpPurpose purpose);
}