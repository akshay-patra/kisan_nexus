package com.kisannexus.aggregation;

import com.kisannexus.common.enums.QualityGrade;
import com.kisannexus.common.enums.QuantityUnit;
import com.kisannexus.fpos.Fpo;
import com.kisannexus.products.Product;
import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "aggregations")
public class Aggregation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "fpo_id", nullable = false)
    private Fpo fpo;

    @ManyToOne(optional = false)
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @Column(nullable = false)
    private Double totalQuantity;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private QuantityUnit unit;

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private QualityGrade qualityGrade;

    @Column(nullable = false, length = 500)
    private String location;

    @Column(nullable = false)
    private LocalDate aggregationDate;

    public Aggregation() {
    }

    public Long getId() {
        return id;
    }

    public Fpo getFpo() {
        return fpo;
    }

    public void setFpo(Fpo fpo) {
        this.fpo = fpo;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Double getTotalQuantity() {
        return totalQuantity;
    }

    public void setTotalQuantity(Double totalQuantity) {
        this.totalQuantity = totalQuantity;
    }

    public QuantityUnit getUnit() {
        return unit;
    }

    public void setUnit(QuantityUnit unit) {
        this.unit = unit;
    }

    public QualityGrade getQualityGrade() {
        return qualityGrade;
    }

    public void setQualityGrade(QualityGrade qualityGrade) {
        this.qualityGrade = qualityGrade;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public LocalDate getAggregationDate() {
        return aggregationDate;
    }

    public void setAggregationDate(LocalDate aggregationDate) {
        this.aggregationDate = aggregationDate;
    }
}