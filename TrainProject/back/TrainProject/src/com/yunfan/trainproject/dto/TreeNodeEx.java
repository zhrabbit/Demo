package com.yunfan.trainproject.dto;

import java.util.List;

public class TreeNodeEx {
	private String code;
	private String text;
	private String modelType;
	private String parentId;
	private Boolean leaf = true;
	private String area;

	@SuppressWarnings("rawtypes")
	private List children;

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public String getParentId() {
		return parentId;
	}

	public void setParentId(String parentId) {
		this.parentId = parentId;
	}

	public Boolean getLeaf() {
		return leaf;
	}

	public void setLeaf(Boolean leaf) {
		this.leaf = leaf;
	}

	public String getModelType() {
		return modelType;
	}

	public void setModelType(String modelType) {
		this.modelType = modelType;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}
	
	@SuppressWarnings("rawtypes")
	public List getChildren() {
		return children;
	}
	
	@SuppressWarnings("rawtypes")
	public void setChildren(List children) {
		this.children = children;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}
}