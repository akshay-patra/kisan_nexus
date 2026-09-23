package com.kisannexus.supply;

import com.kisannexus.common.enums.QualityGrade;
import com.kisannexus.common.enums.QuantityUnit;
import com.kisannexus.common.enums.SupplyStatus;
import com.kisannexus.farmers.Farmer;
import com.kisannexus.products.Product;
import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "supply_listings")
public class SupplyListing {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "farmer_id", nullable = false)
    private Farmer farmer;

    @ManyToOne(optional = false)
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @Column(nullable = false)
    private Double quantity;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private QuantityUnit unit;

    @Column(nullable = false)
    private Double expectedPrice;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private QualityGrade quality;

    @Column(length = 500)
    private String location;

    @Column(nullable = false)
    private LocalDate availableDate;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 30)
    private SupplyStatus status = SupplyStatus.AVAILABLE;

    public SupplyListing() {
    }

    public Long getId() {
        return id;
    }

    public Farmer getFarmer() {
        return farmer;
    }

    public void setFarmer(Farmer farmer) {
        this.farmer = farmer;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Double getQuantity() {
        return quantity;
    }

    public void setQuantity(Double quantity) {
        this.quantity = quantity;
    }

    public QuantityUnit getUnit() {
        return unit;
    }

    public void setUnit(QuantityUnit unit) {
        this.unit = unit;
    }

    public Double getExpectedPrice() {
        return expectedPrice;
    }

    public void setExpectedPrice(Double expectedPrice) {
        this.expectedPrice = expectedPrice;
    }

    public QualityGrade getQuality() {
        return quality;
    }

    public void setQuality(QualityGrade quality) {
        this.quality = quality;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public LocalDate getAvailableDate() {
        return availableDate;
    }

    public void setAvailableDate(LocalDate availableDate) {
        this.availableDate = availableDate;
    }

    public SupplyStatus getStatus() {
        return status;
    }

    public void setStatus(SupplyStatus status) {
        this.status = status;
    }
}
