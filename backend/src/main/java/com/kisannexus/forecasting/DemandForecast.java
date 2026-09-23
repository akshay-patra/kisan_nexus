package com.kisannexus.forecasting;

import com.kisannexus.products.Product;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "demand_forecasts")
public class DemandForecast {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @Column(nullable = false)
    private Double predictedQuantity;

    @Column(nullable = false, length = 20)
    private String unit;

    @Column
    private Double confidence;

    @Column(nullable = false)
    private LocalDate forecastDate;

    @Column(nullable = false)
    private LocalDateTime generatedAt;

    public DemandForecast() {
    }

    @PrePersist
    protected void onCreate() {
        generatedAt = LocalDateTime.now();
    }

    public Long getId() {
        return id;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Double getPredictedQuantity() {
        return predictedQuantity;
    }

    public void setPredictedQuantity(Double predictedQuantity) {
        this.predictedQuantity = predictedQuantity;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public Double getConfidence() {
        return confidence;
    }

    public void setConfidence(Double confidence) {
        this.confidence = confidence;
    }

    public LocalDate getForecastDate() {
        return forecastDate;
    }

    public void setForecastDate(LocalDate forecastDate) {
        this.forecastDate = forecastDate;
    }

    public LocalDateTime getGeneratedAt() {
        return generatedAt;
    }
}
