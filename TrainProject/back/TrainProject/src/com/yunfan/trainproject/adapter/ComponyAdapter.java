package com.yunfan.trainproject.adapter;

import com.yunfan.mdk.model.adapter.AbstractAdapter;
import com.yunfan.mdk.model.adapter.AdapterUtil;
import com.yunfan.mdk.model.dto.BaseDTO;
import com.yunfan.mdk.model.entity.BModel;
import com.yunfan.trainproject.dto.ComponyDTO;
import com.yunfan.trainproject.model.entity.Compony;

public class ComponyAdapter extends AbstractAdapter {
	@Override
	public BaseDTO convert2DTO(BModel source)
	{
		ComponyDTO dest = new ComponyDTO();
		Compony entity = (Compony)source;
		
		AdapterUtil.convert(entity, dest);
		
		if(entity.getDeptDic() != null) {
			dest.setDepartmentName(entity.getDeptDic().getDictionaryName());
		}
		if(entity.getGroupDic() != null) {
			dest.setGroupName(entity.getGroupDic().getDictionaryName());
		}
		
		return dest;
	}
	

}
