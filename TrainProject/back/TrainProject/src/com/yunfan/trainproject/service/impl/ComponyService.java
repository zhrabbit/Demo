package com.yunfan.trainproject.service.impl;

import javax.annotation.Resource;

import com.yunfan.mdk.service.impl.AbstractService;
import com.yunfan.trainproject.dao.ComponyDAO;
import com.yunfan.trainproject.service.IComponyService;

public class ComponyService extends AbstractService implements IComponyService {
	@Resource
	ComponyDAO componyDao;
	
	public ComponyService()
	{
		super();
	}
	
	@Override
	protected void buildAbilityDao()
	{
		daoList.add(componyDao);
	
    }
}
