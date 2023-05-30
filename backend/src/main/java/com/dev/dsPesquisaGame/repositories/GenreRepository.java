package com.dev.dsPesquisaGame.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dev.dsPesquisaGame.entities.Genre;

public interface GenreRepository extends JpaRepository<Genre, Long>{

}
