package com.dev.dsPesquisaGame.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dev.dsPesquisaGame.entities.Game;

@Repository
public interface GameRepository extends JpaRepository<Game, Long>{

}
