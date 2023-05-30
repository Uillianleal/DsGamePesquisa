package com.dev.dsPesquisaGame.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dev.dsPesquisaGame.entities.Record;

@Repository
public interface RecordRepository extends JpaRepository<Record, Long>{

}
