package com.kisannexus.forecasting;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DemandForecastRepository
        extends JpaRepository<DemandForecast, Long> {

    List<DemandForecast> findByProductId(Long productId);
}
