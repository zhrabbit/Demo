package com.yunfan.trainproject.model.entity;

import com.yunfan.mdk.model.entity.BModel;

// Generated 2016-3-25 10:49:59 by Hibernate Tools 3.4.0.CR1

/**
 * Dictionary generated by hbm2java
 */
public class Dictionary extends BModel implements java.io.Serializable {

	private String code;
	private String parentUuid;
	private String dictionaryName;
	private String dictionaryType;
	private String remark;

	public Dictionary() {
	}

	public Dictionary(int id) {
		this.setId(id);
	}

	public Dictionary(int id, String code, String parentUuid,
			String dictionaryName, String dictionaryType, String remark) {
		this.setId(id);
		this.code = code;
		this.parentUuid = parentUuid;
		this.dictionaryName = dictionaryName;
		this.dictionaryType = dictionaryType;
		this.remark = remark;
	}

	public String getCode() {
		return this.code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getParentUuid() {
		return this.parentUuid;
	}

	public void setParentUuid(String parentUuid) {
		this.parentUuid = parentUuid;
	}

	public String getDictionaryName() {
		return this.dictionaryName;
	}

	public void setDictionaryName(String dictionaryName) {
		this.dictionaryName = dictionaryName;
	}

	public String getDictionaryType() {
		return this.dictionaryType;
	}

	public void setDictionaryType(String dictionaryType) {
		this.dictionaryType = dictionaryType;
	}

	public String getRemark() {
		return this.remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

}
