package com.kisannexus.supply;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SupplyRepository extends JpaRepository<SupplyListing, Long> {

    List<SupplyListing> findByFarmerId(Long farmerId);

    List<SupplyListing> findByProductIdAndStatus(Long productId,
                                                  com.kisannexus.common.enums.SupplyStatus status);
}