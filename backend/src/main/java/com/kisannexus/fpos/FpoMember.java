package com.kisannexus.fpos;

import com.kisannexus.farmers.Farmer;
import jakarta.persistence.*;

@Entity
@Table(
    name = "fpo_members",
    uniqueConstraints = {
        @UniqueConstraint(
            name = "uk_fpo_farmer",
            columnNames = {"fpo_id", "farmer_id"}
        )
    }
)
public class FpoMember {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "fpo_id", nullable = false)
    private Fpo fpo;

    @ManyToOne(optional = false)
    @JoinColumn(name = "farmer_id", nullable = false)
    private Farmer farmer;

    @Column(nullable = false)
    private Boolean active = true;

    public FpoMember() {
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

    public Farmer getFarmer() {
        return farmer;
    }

    public void setFarmer(Farmer farmer) {
        this.farmer = farmer;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }
}