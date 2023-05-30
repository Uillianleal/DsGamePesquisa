package com.dev.dsPesquisaGame.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dev.dsPesquisaGame.entities.Record;

public interface RecordRepository extends JpaRepository<Record, Long>{

}
