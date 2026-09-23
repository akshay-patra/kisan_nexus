package com.kisannexus.farmers;

import com.kisannexus.users.User;
import jakarta.persistence.*;

@Entity
@Table(name = "farmers")
public class Farmer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(optional = false)
    @JoinColumn(name = "user_id", nullable = false, unique = true)
    private User user;

    @Column
    private Double farmSizeAcres;

    @Column(length = 500)
    private String farmLocation;

    public Farmer() {
    }

    public Long getId() {
        return id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Double getFarmSizeAcres() {
        return farmSizeAcres;
    }

    public void setFarmSizeAcres(Double farmSizeAcres) {
        this.farmSizeAcres = farmSizeAcres;
    }

    public String getFarmLocation() {
        return farmLocation;
    }

    public void setFarmLocation(String farmLocation) {
        this.farmLocation = farmLocation;
    }
}