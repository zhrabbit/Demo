package com.yunfan.trainproject.direct;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.softwarementors.extjs.djn.config.annotations.DirectMethod;
import com.yunfan.mdk.constant.CommonConstants;
import com.yunfan.mdk.model.dto.TreeDataStore;
import com.yunfan.mdk.model.entity.BModel;
import com.yunfan.mdk.provider.direct.DirectAction;
import com.yunfan.trainproject.adapter.NaviTreeAdapter;
import com.yunfan.trainproject.constants.AppConstants;
import com.yunfan.trainproject.dto.TreeNodeEx;
import com.yunfan.trainproject.model.entity.NaviTree;
import com.yunfan.trainproject.service.INaviTreeService;

public class NaviTreeAction  extends DirectAction {
	@Override
	public void initBeanConfig() 
	{
		setServiceBeanId("naviTreeService");
		setAdapterBeanId("naviTreeAdapter");
		setDefaultClass(NaviTree.class);
	}
	
	@Override
	protected Class<?> getAcceptClass()
	{
		return NaviTree.class;
	}
	
	@DirectMethod
	public TreeDataStore getBrowseTree(String node) {
		TreeDataStore result = new TreeDataStore();
		List<TreeNodeEx> nodeList = new ArrayList<TreeNodeEx>();
		List<BModel> entityList = null;
	
		Map<String, Object> condition = new HashMap<String, Object>();
		condition.put(CommonConstants.QUERYTYPE, AppConstants.GETBYBELONGTONODE);
		condition.put(AppConstants.PARAM_BELONGTO_NODE, null);
		
		entityList = ((INaviTreeService) myService)
				.readRecord(NaviTree.class, condition);
		if (entityList != null && entityList.size() != 0) {
			for (BModel record : entityList) {
				TreeNodeEx treeNode = ((NaviTreeAdapter) myAdapter)
						.convert2TreeNodeEx(record);
				nodeList.add(treeNode);
			}
		}
		
		result.setSuccess(true);
		result.setChildren(nodeList);

		return result;
	}
}
