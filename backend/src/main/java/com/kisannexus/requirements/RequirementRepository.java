package com.kisannexus.requirements;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RequirementRepository extends JpaRepository<BuyerRequirement, Long> {

    List<BuyerRequirement> findByBuyerId(Long buyerId);

    List<BuyerRequirement> findByProductId(Long productId);
}
