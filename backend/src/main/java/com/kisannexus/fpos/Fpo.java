package com.kisannexus.fpos;

import com.kisannexus.users.User;
import jakarta.persistence.*;

@Entity
@Table(name = "fpos")
public class Fpo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(optional = false)
    @JoinColumn(name = "user_id", nullable = false, unique = true)
    private User user;

    @Column(nullable = false, length = 150)
    private String fpoName;

    @Column(unique = true, length = 100)
    private String registrationNumber;

    @Column(length = 500)
    private String location;

    public Fpo() {
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

    public String getFpoName() {
        return fpoName;
    }

    public void setFpoName(String fpoName) {
        this.fpoName = fpoName;
    }

    public String getRegistrationNumber() {
        return registrationNumber;
    }

    public void setRegistrationNumber(String registrationNumber) {
        this.registrationNumber = registrationNumber;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}