package com.kisannexus.aggregation;

import com.kisannexus.supply.SupplyListing;
import jakarta.persistence.*;

@Entity
@Table(
    name = "aggregation_contributions",
    uniqueConstraints = {
        @UniqueConstraint(
            name = "uk_aggregation_supply",
            columnNames = {"aggregation_id", "supply_listing_id"}
        )
    }
)
public class AggregationContribution {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "aggregation_id", nullable = false)
    private Aggregation aggregation;

    @ManyToOne(optional = false)
    @JoinColumn(name = "supply_listing_id", nullable = false)
    private SupplyListing supplyListing;

    @Column(nullable = false)
    private Double contributedQuantity;

    public AggregationContribution() {
    }

    public Long getId() {
        return id;
    }

    public Aggregation getAggregation() {
        return aggregation;
    }

    public void setAggregation(Aggregation aggregation) {
        this.aggregation = aggregation;
    }

    public SupplyListing getSupplyListing() {
        return supplyListing;
    }

    public void setSupplyListing(SupplyListing supplyListing) {
        this.supplyListing = supplyListing;
    }

    public Double getContributedQuantity() {
        return contributedQuantity;
    }

    public void setContributedQuantity(Double contributedQuantity) {
        this.contributedQuantity = contributedQuantity;
    }
}
