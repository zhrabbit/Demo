package com.yunfan.trainproject.adapter;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import com.yunfan.mdk.model.adapter.AbstractAdapter;
import com.yunfan.mdk.model.entity.BModel;
import com.yunfan.trainproject.dto.TreeNodeEx;
import com.yunfan.trainproject.model.entity.NaviTree;

public class NaviTreeAdapter extends AbstractAdapter {

	public TreeNodeEx convert2TreeNodeEx(BModel source) {
		TreeNodeEx dest = new TreeNodeEx();
		NaviTree entity = (NaviTree)source;
		
		dest.setText(entity.getName());
		dest.setCode(entity.getNode());
		dest.setModelType("tree.area");
		dest.setParentId(entity.getBelongtoNode());
		List<TreeNodeEx> children = null;

		Set<NaviTree> subTrees = entity.getChildren();
		if(subTrees != null && subTrees.size() != 0) {
			dest.setLeaf(false);
			
			children = new ArrayList<TreeNodeEx>();
			for(NaviTree subTree: subTrees) {
				TreeNodeEx child = convert2TreeNodeEx(subTree);
				child.setModelType("tree.compony");
				NaviTree node = subTree.getNaviTree();
				child.setArea(node.getName());
				children.add(child);
			}
		}

		dest.setChildren(children);
		
		return dest;
	}
	

}
