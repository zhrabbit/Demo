package com.yunfan.trainproject.service.impl;

import javax.annotation.Resource;

import com.yunfan.mdk.service.impl.AbstractService;
import com.yunfan.trainproject.dao.NaviTreeDAO;
import com.yunfan.trainproject.service.INaviTreeService;

public class NaviTreeService extends AbstractService implements INaviTreeService {
	@Resource
	NaviTreeDAO naviTreeDao;
	
	public NaviTreeService()
	{
		super();
	}
	
	@Override
	protected void buildAbilityDao()
	{
		daoList.add(naviTreeDao);
	
    }
}
