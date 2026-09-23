package com.kisannexus.requirements;

import com.kisannexus.buyers.Buyer;
import com.kisannexus.common.enums.QualityGrade;
import com.kisannexus.common.enums.QuantityUnit;
import com.kisannexus.products.Product;
import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "buyer_requirements")
public class BuyerRequirement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "buyer_id", nullable = false)
    private Buyer buyer;

    @ManyToOne(optional = false)
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @Column(nullable = false)
    private Double quantity;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private QuantityUnit unit;

    @Column
    private Double targetPrice;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private QualityGrade quality;

    @Column(length = 500)
    private String deliveryLocation;

    @Column(nullable = false)
    private LocalDate requiredDate;

    public BuyerRequirement() {
    }

    public Long getId() {
        return id;
    }

    public Buyer getBuyer() {
        return buyer;
    }

    public void setBuyer(Buyer buyer) {
        this.buyer = buyer;
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

    public Double getTargetPrice() {
        return targetPrice;
    }

    public void setTargetPrice(Double targetPrice) {
        this.targetPrice = targetPrice;
    }

    public QualityGrade getQuality() {
        return quality;
    }

    public void setQuality(QualityGrade quality) {
        this.quality = quality;
    }

    public String getDeliveryLocation() {
        return deliveryLocation;
    }

    public void setDeliveryLocation(String deliveryLocation) {
        this.deliveryLocation = deliveryLocation;
    }

    public LocalDate getRequiredDate() {
        return requiredDate;
    }

    public void setRequiredDate(LocalDate requiredDate) {
        this.requiredDate = requiredDate;
    }
}
