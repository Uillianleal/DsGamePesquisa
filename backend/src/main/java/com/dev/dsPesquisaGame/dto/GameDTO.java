package com.dev.dsPesquisaGame.dto;

import java.io.Serializable;

import org.springframework.beans.BeanUtils;

import com.dev.dsPesquisaGame.entities.Game;
import com.dev.dsPesquisaGame.enums.Platform;

public class GameDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private String title;
	private Platform platform;

	public GameDTO() {
	}

	public GameDTO(Long id, String title, Platform platform) {
		this.id = id;
		this.title = title;
		this.platform = platform;
	}

	public GameDTO(Game entity) {
		BeanUtils.copyProperties(entity, this);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Platform getPlatform() {
		return platform;
	}

	public void setPlatform(Platform platform) {
		this.platform = platform;
	}

}
