package com.dev.dsPesquisaGame.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dev.dsPesquisaGame.entities.Genre;

@Repository
public interface GenreRepository extends JpaRepository<Genre, Long>{

}
