package com.yunfan.trainproject.service.impl;

import javax.annotation.Resource;

import com.yunfan.mdk.service.impl.AbstractService;
import com.yunfan.trainproject.dao.DictionaryDAO;
import com.yunfan.trainproject.service.IDictionaryService;

public class DictionaryService extends AbstractService implements IDictionaryService {
	@Resource
	DictionaryDAO dictionaryDao;
	
	public DictionaryService()
	{
		super();
	}
	
	@Override
	protected void buildAbilityDao()
	{
		daoList.add(dictionaryDao);
	
    }
}
