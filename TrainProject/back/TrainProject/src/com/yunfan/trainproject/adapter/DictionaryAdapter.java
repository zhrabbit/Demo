package com.yunfan.trainproject.adapter;

import com.yunfan.mdk.model.adapter.AbstractAdapter;
import com.yunfan.mdk.model.adapter.AdapterUtil;
import com.yunfan.mdk.model.dto.BaseDTO;
import com.yunfan.mdk.model.entity.BModel;
import com.yunfan.trainproject.dto.DictionaryDTO;
import com.yunfan.trainproject.model.entity.Dictionary;

public class DictionaryAdapter extends AbstractAdapter {
	@Override
	public BaseDTO convert2DTO(BModel source)
	{
		DictionaryDTO dest = new DictionaryDTO();
		Dictionary entity = (Dictionary)source;
		
		AdapterUtil.convert(entity, dest);
		
		return dest;
	}
	

}
