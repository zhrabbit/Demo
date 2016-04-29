package com.yunfan.trainproject.direct;

import com.yunfan.mdk.provider.direct.DirectAction;
import com.yunfan.trainproject.model.entity.Dictionary;

public class DictionaryAction  extends DirectAction {
	@Override
	public void initBeanConfig() 
	{
		setServiceBeanId("dictionaryService");
		setAdapterBeanId("dictionaryAdapter");
		setDefaultClass(Dictionary.class);
	}
	
	@Override
	protected Class<?> getAcceptClass()
	{
		return Dictionary.class;
	}
	
	

}
