package com.yunfan.trainproject.model.entity;

import java.util.Set;

import com.yunfan.mdk.model.entity.BModel;

// Generated 2016-3-25 10:52:13 by Hibernate Tools 3.4.0.CR1

/**
 * NaviTree generated by hbm2java
 */
public class NaviTree extends BModel implements java.io.Serializable {

	private String name;
	private String belongtoNode;
	private String node;
	
	private Set<NaviTree> children;
	private NaviTree naviTree;

	public NaviTree() {
	}

	public NaviTree(int id) {
		this.setId(id);
	}

	public NaviTree(int id, String name, String belongtoNode, String node) {
		this.setId(id);
		this.name = name;
		this.belongtoNode = belongtoNode;
		this.node = node;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getBelongtoNode() {
		return this.belongtoNode;
	}

	public void setBelongtoNode(String belongtoNode) {
		this.belongtoNode = belongtoNode;
	}

	public String getNode() {
		return this.node;
	}

	public void setNode(String node) {
		this.node = node;
	}

	public Set<NaviTree> getChildren() {
		return children;
	}

	public void setChildren(Set<NaviTree> children) {
		this.children = children;
	}

	public NaviTree getNaviTree() {
		return naviTree;
	}

	public void setNaviTree(NaviTree naviTree) {
		this.naviTree = naviTree;
	}

}
