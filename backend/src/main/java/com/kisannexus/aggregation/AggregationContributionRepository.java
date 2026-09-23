package com.kisannexus.aggregation;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AggregationContributionRepository
        extends JpaRepository<AggregationContribution, Long> {

    List<AggregationContribution>
    findByAggregationId(Long aggregationId);

    List<AggregationContribution>
    findBySupplyListingId(Long supplyListingId);
}