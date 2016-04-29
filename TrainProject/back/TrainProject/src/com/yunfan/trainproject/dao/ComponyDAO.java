package com.yunfan.trainproject.dao;

import java.lang.reflect.Field;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Map;

import org.hibernate.Query;
import org.hibernate.Session;

import com.yunfan.mdk.model.dao.AbstractDAO;
import com.yunfan.trainproject.constants.AppConstants;
import com.yunfan.trainproject.model.entity.Compony;

public class ComponyDAO extends AbstractDAO{
	
	public ComponyDAO()
	{
		super();
		table = "Compony";
	}
	
	@SuppressWarnings("rawtypes")
	@Override
	public Class getModelClass()
	{
		return Compony.class;
	}
	
	@Override
	protected Query getQuery(String queryType, Map<String, Object> condition) {
		Query query = null;

		if (queryType == null || queryType.length() == 0) {
			return null;
		} else if (queryType.equalsIgnoreCase(AppConstants.GETBYAREA)) {
			query = getQueryByArea(condition);
		} else if (queryType.equalsIgnoreCase(AppConstants.GETBYCOMPONYNAME)) {
			query = getQueryByComponyName(condition);
		} 

		return query;
	}
	
	private Query getQueryByArea(Map<String, Object> condition) {

		Session sess = getCurrentSession();
		Query query = null;
		String area = (String) condition.get(AppConstants.PARAM_AREA);

		StringBuffer sb = new StringBuffer();
		sb.append("FROM Compony record where record.area = '" + area + "'");
		
		query = sess.createQuery(sb.toString());
		return query;	
	}
	
	private Query getQueryByComponyName(Map<String, Object> condition) {

		Session sess = getCurrentSession();
		Query query = null;
		String componyName = (String) condition.get(AppConstants.PARAM_COMPONYNAME);

		StringBuffer sb = new StringBuffer();
		sb.append("FROM Compony record where record.componyName = '" + componyName + "'");
		
		query = sess.createQuery(sb.toString());
		return query;	
	}
	
	@Override
	public Object getFieldValue(String key, Object value) {
		Object ret = null;
		Class<?> classType = getModelClass();
		Field field = getClassField(classType, key);
		if(field.getType().getName() =="java.util.Date") {
			DateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			String date = (String) value;
			try {
				ret = formatter.parse(date);
			} catch (ParseException e) {
				e.printStackTrace();
			}
		} else if(field.getType().getName() =="java.lang.Double") {
			ret = getDoubleParam(value);
		} else if(field.getType().getName() =="java.lang.Integer") {
			ret= getIntParam(value);
		} else if(field.getType().getName() == "java.lang.Boolean") {
			String str = value.toString();
			if(str =="true"){
				ret =true;
			}else{
				ret =false;
			}
		} else if(field.getType().getName() =="java.lang.String") {
			ret = (String) value;
		}
		
		return ret;
	}

	@SuppressWarnings({ "rawtypes" })
	private Field getClassField(Class clazz, String fieldName)
	{
		Field[] declaredFields = clazz.getDeclaredFields();  
		for(Field field: declaredFields) {
			if (field.getName().equals(fieldName)) {
				return field;
			}  
		}
		
		Class superclass = clazz.getSuperclass();
		if (superclass != null) {
			return getClassField(superclass, fieldName);  
		} 
		
		return null;
	}

}
