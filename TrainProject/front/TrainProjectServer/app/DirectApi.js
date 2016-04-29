/**********************************************************************
 *
 * Code generated automatically by DirectJNgine
 * Copyright (c) 2009, Pedro Agull¨® Soliveres
 *
 * DO NOT MODIFY MANUALLY!!
 *
 **********************************************************************/
Ext.define('TrainProjectServer.DirectApi', {
  requires: [
    'Ext.direct.*'
  ]
}, function() {

  Ext.namespace('Ext.myDjn');

  Ext.myDjn.PROVIDER_BASE_HOST = '127.0.0.1:8080';
  Ext.myDjn.PROVIDER_BASE_URL = 'http://' + Ext.myDjn.PROVIDER_BASE_HOST + '/TrainProject/djn/directprovider';
  // Ext.myDjn.PROVIDER_BASE_URL=window.location.protocol + '//' + window.location.host + '/' + (window.location.pathname.split('/').length>2 ? window.location.pathname.split('/')[1]+ '/' : '')  + 'djn/directprovider';

  Ext.myDjn.POLLING_URLS = {}
  Ext.myDjn.REMOTING_API = {
    url: Ext.myDjn.PROVIDER_BASE_URL,
    type: 'remoting',
    actions: {
      NaviTreeAction: [{
        name: 'readRecord' /*(java.util.Map) => com.yunfan.mdk.model.dto.ArrayDataStore */ ,
        len: 1,
        formHandler: false
      }, {
        name: 'readPage' /*(java.util.Map) => com.yunfan.mdk.model.dto.ArrayDataStore */ ,
        len: 1,
        formHandler: false
      }, {
        name: 'loadSimpleRecord' /*(String) => com.yunfan.mdk.model.dto.SimpleDataStore */ ,
        len: 1,
        formHandler: false
      }, {
        name: 'loadRecord' /*(int) => com.yunfan.mdk.model.dto.SimpleDataStore */ ,
        len: 1,
        formHandler: false
      }, {
        name: 'updateProperty' /*(int, java.util.Map) => com.yunfan.mdk.model.dto.SimpleDataStore */ ,
        len: 2,
        formHandler: false
      }, {
        name: 'deleteSimpleRecord' /*(java.util.Map) => com.yunfan.mdk.model.dto.SimpleDataStore */ ,
        len: 1,
        formHandler: false
      }, {
        name: 'updateRecord' /*(String, String) => com.yunfan.mdk.model.dto.SimpleDataStore */ ,
        len: 2,
        formHandler: false
      }, {
        name: 'readDataView' /*(java.util.Map) => com.yunfan.mdk.model.dto.ArrayDataStore */ ,
        len: 1,
        formHandler: false
      }, {
        name: 'getBrowseTree' /*(String) => com.yunfan.mdk.model.dto.TreeDataStore */ ,
        len: 1,
        formHandler: false
      }, {
        name: 'createSimpleRecord' /*(java.util.Map) => com.yunfan.mdk.model.dto.SimpleDataStore */ ,
        len: 1,
        formHandler: false
      }, {
        name: 'searchRecord' /*(String) => com.yunfan.mdk.model.dto.ArrayDataStore */ ,
        len: 1,
        formHandler: false
      }, {
        name: 'deleteRecord' /*(int) => com.yunfan.mdk.model.dto.SimpleDataStore */ ,
        len: 1,
        formHandler: false
      }, {
        name: 'updateSimpleRecord' /*(java.util.Map) => com.yunfan.mdk.model.dto.SimpleDataStore */ ,
        len: 1,
        formHandler: false
      }, {
        name: 'deleteMultiRecord' /*(Integer[]) => com.yunfan.mdk.model.dto.ArrayDataStore */ ,
        len: 1,
        formHandler: false
      }, {
        name: 'readSimpleRecord' /*(java.util.Map) => com.yunfan.mdk.model.dto.ArrayDataStore */ ,
        len: 1,
        formHandler: false
      }, {
        name: 'createRecord' /*(String, String) => com.yunfan.mdk.model.dto.SimpleDataStore */ ,
        len: 2,
        formHandler: false
      }],
      DictionaryAction: [{
        name: 'readRecord' /*(java.util.Map) => com.yunfan.mdk.model.dto.ArrayDataStore */ ,
        len: 1,
        formHandler: false
      }, {
        name: 'readPage' /*(java.util.Map) => com.yunfan.mdk.model.dto.ArrayDataStore */ ,
        len: 1,
        formHandler: false
      }, {
        name: 'loadSimpleRecord' /*(String) => com.yunfan.mdk.model.dto.SimpleDataStore */ ,
        len: 1,
        formHandler: false
      }, {
        name: 'loadRecord' /*(int) => com.yunfan.mdk.model.dto.SimpleDataStore */ ,
        len: 1,
        formHandler: false
      }, {
        name: 'updateProperty' /*(int, java.util.Map) => com.yunfan.mdk.model.dto.SimpleDataStore */ ,
        len: 2,
        formHandler: false
      }, {
        name: 'deleteSimpleRecord' /*(java.util.Map) => com.yunfan.mdk.model.dto.SimpleDataStore */ ,
        len: 1,
        formHandler: false
      }, {
        name: 'updateRecord' /*(String, String) => com.yunfan.mdk.model.dto.SimpleDataStore */ ,
        len: 2,
        formHandler: false
      }, {
        name: 'readDataView' /*(java.util.Map) => com.yunfan.mdk.model.dto.ArrayDataStore */ ,
        len: 1,
        formHandler: false
      }, {
        name: 'createSimpleRecord' /*(java.util.Map) => com.yunfan.mdk.model.dto.SimpleDataStore */ ,
        len: 1,
        formHandler: false
      }, {
        name: 'searchRecord' /*(String) => com.yunfan.mdk.model.dto.ArrayDataStore */ ,
        len: 1,
        formHandler: false
      }, {
        name: 'deleteRecord' /*(int) => com.yunfan.mdk.model.dto.SimpleDataStore */ ,
        len: 1,
        formHandler: false
      }, {
        name: 'updateSimpleRecord' /*(java.util.Map) => com.yunfan.mdk.model.dto.SimpleDataStore */ ,
        len: 1,
        formHandler: false
      }, {
        name: 'deleteMultiRecord' /*(Integer[]) => com.yunfan.mdk.model.dto.ArrayDataStore */ ,
        len: 1,
        formHandler: false
      }, {
        name: 'readSimpleRecord' /*(java.util.Map) => com.yunfan.mdk.model.dto.ArrayDataStore */ ,
        len: 1,
        formHandler: false
      }, {
        name: 'createRecord' /*(String, String) => com.yunfan.mdk.model.dto.SimpleDataStore */ ,
        len: 2,
        formHandler: false
      }],
      ComponyAction: [{
        name: 'readRecord' /*(java.util.Map) => com.yunfan.mdk.model.dto.ArrayDataStore */ ,
        len: 1,
        formHandler: false
      }, {
        name: 'readPage' /*(java.util.Map) => com.yunfan.mdk.model.dto.ArrayDataStore */ ,
        len: 1,
        formHandler: false
      }, {
        name: 'loadSimpleRecord' /*(String) => com.yunfan.mdk.model.dto.SimpleDataStore */ ,
        len: 1,
        formHandler: false
      }, {
        name: 'loadRecord' /*(int) => com.yunfan.mdk.model.dto.SimpleDataStore */ ,
        len: 1,
        formHandler: false
      }, {
        name: 'updateProperty' /*(int, java.util.Map) => com.yunfan.mdk.model.dto.SimpleDataStore */ ,
        len: 2,
        formHandler: false
      }, {
        name: 'deleteSimpleRecord' /*(java.util.Map) => com.yunfan.mdk.model.dto.SimpleDataStore */ ,
        len: 1,
        formHandler: false
      }, {
        name: 'updateRecord' /*(String, String) => com.yunfan.mdk.model.dto.SimpleDataStore */ ,
        len: 2,
        formHandler: false
      }, {
        name: 'readDataView' /*(java.util.Map) => com.yunfan.mdk.model.dto.ArrayDataStore */ ,
        len: 1,
        formHandler: false
      }, {
        name: 'createSimpleRecord' /*(java.util.Map) => com.yunfan.mdk.model.dto.SimpleDataStore */ ,
        len: 1,
        formHandler: false
      }, {
        name: 'searchRecord' /*(String) => com.yunfan.mdk.model.dto.ArrayDataStore */ ,
        len: 1,
        formHandler: false
      }, {
        name: 'deleteRecord' /*(int) => com.yunfan.mdk.model.dto.SimpleDataStore */ ,
        len: 1,
        formHandler: false
      }, {
        name: 'updateSimpleRecord' /*(java.util.Map) => com.yunfan.mdk.model.dto.SimpleDataStore */ ,
        len: 1,
        formHandler: false
      }, {
        name: 'deleteMultiRecord' /*(Integer[]) => com.yunfan.mdk.model.dto.ArrayDataStore */ ,
        len: 1,
        formHandler: false
      }, {
        name: 'readSimpleRecord' /*(java.util.Map) => com.yunfan.mdk.model.dto.ArrayDataStore */ ,
        len: 1,
        formHandler: false
      }, {
        name: 'createRecord' /*(String, String) => com.yunfan.mdk.model.dto.SimpleDataStore */ ,
        len: 2,
        formHandler: false
      }]
    }
  }
  Ext.myDjn.REMOTING_API.enableBuffer = false;
  Ext.myDjn.REMOTING_API.timeout = 1480000;
  Ext.direct.Manager.addProvider(Ext.myDjn.REMOTING_API);
  Ext.Ajax.timeout = 180000;
});