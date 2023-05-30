package com.dev.dsPesquisaGame.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dev.dsPesquisaGame.entities.Game;

public interface GameRepository extends JpaRepository<Game, Long>{

}
