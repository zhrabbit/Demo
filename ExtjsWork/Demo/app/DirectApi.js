/**********************************************************************
 *
 * Code generated automatically by DirectJNgine
 * Copyright (c) 2009, Pedro Agull¨® Soliveres
 *
 * DO NOT MODIFY MANUALLY!!
 *
 **********************************************************************/
Ext.define('Demo.DirectApi', {}, function() {

  Ext.namespace('Ext.myDjn');
  /*指定服务器IP和port*/
  Ext.myDjn.PROVIDER_BASE_HOST = '127.0.0.1:8080';
  Ext.myDjn.PROVIDER_BASE_URL = 'http://' + Ext.myDjn.PROVIDER_BASE_HOST + '/Demo/djn/directprovider';

  Ext.myDjn.POLLING_URLS = {};
  Ext.myDjn.REMOTING_API = {
    url: Ext.myDjn.PROVIDER_BASE_URL,
    type: 'remoting',
    actions: {
      /*后台action*/
      UserAction: [

        {
          name: 'readSimpleRecord' /*(java.util.Map) => com.yunfan.mdk.model.dto.ArrayDataStore */ ,
          len: 1,
          formHandler: false
        }
      ]
    }
  }

  Ext.myDjn.REMOTING_API.enableBuffer = false;
  Ext.myDjn.REMOTING_API.timeout = 1480000;
  Ext.direct.Manager.addProvider(Ext.myDjn.REMOTING_API);
  Ext.Ajax.timeout = 180000;
});