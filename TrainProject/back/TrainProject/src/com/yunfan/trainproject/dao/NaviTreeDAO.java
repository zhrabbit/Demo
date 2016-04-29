package com.yunfan.trainproject.dao;

import java.util.Map;

import org.hibernate.Query;
import org.hibernate.Session;

import com.yunfan.mdk.model.dao.AbstractDAO;
import com.yunfan.trainproject.constants.AppConstants;
import com.yunfan.trainproject.model.entity.NaviTree;

public class NaviTreeDAO extends AbstractDAO{
	
	public NaviTreeDAO()
	{
		super();
		table = "NaviTree";
	}
	
	@SuppressWarnings("rawtypes")
	@Override
	public Class getModelClass()
	{
		return NaviTree.class;
	}
	
	@Override
	protected Query getQuery(String queryType, Map<String, Object> condition) {
		Query query = null;

		if (queryType == null || queryType.length() == 0) {
			return null;
		} else if (queryType.equalsIgnoreCase(AppConstants.GETBYBELONGTONODE)) {
			query = getQueryByBelongtoNode(condition);
		} 

		return query;
	}
	
	private Query getQueryByBelongtoNode(Map<String, Object> condition) {
		Query query = null;
		Session sess = getCurrentSession();
		Object valueObj;
		
		valueObj = condition.get(AppConstants.PARAM_BELONGTO_NODE);
		
		StringBuffer sb = new StringBuffer();
		sb.append("FROM NaviTree record ");
		
		if(valueObj != null) {
			sb.append(" where ");
			sb.append(" record.belongtoNode = :BELONGTONODE ");
		} else {
			sb.append(" where record.belongtoNode = null ");
		}

		query = sess.createQuery(sb.toString());
		if(valueObj != null) {
			query.setParameter("BELONGTONODE", valueObj);
		}
		
		return query;
	}

}
