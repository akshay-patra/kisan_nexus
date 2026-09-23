package com.kisannexus.aggregation;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AggregationRepository extends JpaRepository<Aggregation, Long> {

    List<Aggregation> findByFpoId(Long fpoId);

    List<Aggregation> findByProductId(Long productId);
}
