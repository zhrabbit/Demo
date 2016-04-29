package com.yunfan.trainproject.dto;

import com.yunfan.mdk.model.dto.BaseDTO;

public class ComponyDTO extends BaseDTO {
	private int id;
	private String componyName;
	private String area;
	private String department;
	private String deptGroup;
	private Integer femaleStaffNumber;
	private Integer maleStaffNumber;
	
	private String departmentName;
	private String groupName;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getComponyName() {
		return componyName;
	}
	public void setComponyName(String componyName) {
		this.componyName = componyName;
	}
	public String getArea() {
		return area;
	}
	public void setArea(String area) {
		this.area = area;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public Integer getFemaleStaffNumber() {
		return femaleStaffNumber;
	}
	public void setFemaleStaffNumber(Integer femaleStaffNumber) {
		this.femaleStaffNumber = femaleStaffNumber;
	}
	public Integer getMaleStaffNumber() {
		return maleStaffNumber;
	}
	public void setMaleStaffNumber(Integer maleStaffNumber) {
		this.maleStaffNumber = maleStaffNumber;
	}
	public String getDepartmentName() {
		return departmentName;
	}
	public void setDepartmentName(String departmentName) {
		this.departmentName = departmentName;
	}
	public String getGroupName() {
		return groupName;
	}
	public void setGroupName(String groupName) {
		this.groupName = groupName;
	}
	public String getDeptGroup() {
		return deptGroup;
	}
	public void setDeptGroup(String deptGroup) {
		this.deptGroup = deptGroup;
	}
}
