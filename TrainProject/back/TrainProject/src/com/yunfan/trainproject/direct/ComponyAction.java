package com.yunfan.trainproject.direct;

import com.yunfan.mdk.provider.direct.DirectAction;
import com.yunfan.trainproject.model.entity.Compony;

public class ComponyAction  extends DirectAction {
	@Override
	public void initBeanConfig() 
	{
		setServiceBeanId("componyService");
		setAdapterBeanId("componyAdapter");
		setDefaultClass(Compony.class);
	}
	
	@Override
	protected Class<?> getAcceptClass()
	{
		return Compony.class;
	}
	
	

}
