package com.yunfan.trainproject.dao;

import com.yunfan.mdk.model.dao.AbstractDAO;
import com.yunfan.trainproject.model.entity.Dictionary;

public class DictionaryDAO extends AbstractDAO{
	
	public DictionaryDAO()
	{
		super();
		table = "Dictionary";
	}
	
	@SuppressWarnings("rawtypes")
	@Override
	public Class getModelClass()
	{
		return Dictionary.class;
	}
}
