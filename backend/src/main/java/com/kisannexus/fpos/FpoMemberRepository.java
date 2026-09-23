package com.kisannexus.fpos;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FpoMemberRepository extends JpaRepository<FpoMember, Long> {

    List<FpoMember> findByFpoId(Long fpoId);

    List<FpoMember> findByFarmerId(Long farmerId);
}