/**********************************************************************
 * 
 * Code generated automatically by DirectJNgine
 * Copyright (c) 2009, Pedro Agulló Soliveres
 * 
 * DO NOT MODIFY MANUALLY!!
 * 
 **********************************************************************/

Ext.namespace( 'Ext.mydjn');

Ext.mydjn.PROVIDER_BASE_URL=window.location.protocol + '//' + window.location.host + '/' + (window.location.pathname.split('/').length>2 ? window.location.pathname.split('/')[1]+ '/' : '')  + 'djn/directprovider';

Ext.mydjn.POLLING_URLS = {
}

Ext.mydjn.REMOTING_API = {
  url: Ext.mydjn.PROVIDER_BASE_URL,
  type: 'remoting',
  actions: {
    NaviTreeAction: [
      {
        name: 'readRecord'/*(java.util.Map) => com.yunfan.mdk.model.dto.ArrayDataStore */,
        len: 1,
        formHandler: false
      },
      {
        name: 'readPage'/*(java.util.Map) => com.yunfan.mdk.model.dto.ArrayDataStore */,
        len: 1,
        formHandler: false
      },
      {
        name: 'loadSimpleRecord'/*(String) => com.yunfan.mdk.model.dto.SimpleDataStore */,
        len: 1,
        formHandler: false
      },
      {
        name: 'loadRecord'/*(int) => com.yunfan.mdk.model.dto.SimpleDataStore */,
        len: 1,
        formHandler: false
      },
      {
        name: 'updateProperty'/*(int, java.util.Map) => com.yunfan.mdk.model.dto.SimpleDataStore */,
        len: 2,
        formHandler: false
      },
      {
        name: 'deleteSimpleRecord'/*(java.util.Map) => com.yunfan.mdk.model.dto.SimpleDataStore */,
        len: 1,
        formHandler: false
      },
      {
        name: 'updateRecord'/*(String, String) => com.yunfan.mdk.model.dto.SimpleDataStore */,
        len: 2,
        formHandler: false
      },
      {
        name: 'readDataView'/*(java.util.Map) => com.yunfan.mdk.model.dto.ArrayDataStore */,
        len: 1,
        formHandler: false
      },
      {
        name: 'getBrowseTree'/*(String) => com.yunfan.mdk.model.dto.TreeDataStore */,
        len: 1,
        formHandler: false
      },
      {
        name: 'createSimpleRecord'/*(java.util.Map) => com.yunfan.mdk.model.dto.SimpleDataStore */,
        len: 1,
        formHandler: false
      },
      {
        name: 'searchRecord'/*(String) => com.yunfan.mdk.model.dto.ArrayDataStore */,
        len: 1,
        formHandler: false
      },
      {
        name: 'deleteRecord'/*(int) => com.yunfan.mdk.model.dto.SimpleDataStore */,
        len: 1,
        formHandler: false
      },
      {
        name: 'updateSimpleRecord'/*(java.util.Map) => com.yunfan.mdk.model.dto.SimpleDataStore */,
        len: 1,
        formHandler: false
      },
      {
        name: 'deleteMultiRecord'/*(Integer[]) => com.yunfan.mdk.model.dto.ArrayDataStore */,
        len: 1,
        formHandler: false
      },
      {
        name: 'readSimpleRecord'/*(java.util.Map) => com.yunfan.mdk.model.dto.ArrayDataStore */,
        len: 1,
        formHandler: false
      },
      {
        name: 'createRecord'/*(String, String) => com.yunfan.mdk.model.dto.SimpleDataStore */,
        len: 2,
        formHandler: false
      }
    ],
    DictionaryAction: [
      {
        name: 'readRecord'/*(java.util.Map) => com.yunfan.mdk.model.dto.ArrayDataStore */,
        len: 1,
        formHandler: false
      },
      {
        name: 'readPage'/*(java.util.Map) => com.yunfan.mdk.model.dto.ArrayDataStore */,
        len: 1,
        formHandler: false
      },
      {
        name: 'loadSimpleRecord'/*(String) => com.yunfan.mdk.model.dto.SimpleDataStore */,
        len: 1,
        formHandler: false
      },
      {
        name: 'loadRecord'/*(int) => com.yunfan.mdk.model.dto.SimpleDataStore */,
        len: 1,
        formHandler: false
      },
      {
        name: 'updateProperty'/*(int, java.util.Map) => com.yunfan.mdk.model.dto.SimpleDataStore */,
        len: 2,
        formHandler: false
      },
      {
        name: 'deleteSimpleRecord'/*(java.util.Map) => com.yunfan.mdk.model.dto.SimpleDataStore */,
        len: 1,
        formHandler: false
      },
      {
        name: 'updateRecord'/*(String, String) => com.yunfan.mdk.model.dto.SimpleDataStore */,
        len: 2,
        formHandler: false
      },
      {
        name: 'readDataView'/*(java.util.Map) => com.yunfan.mdk.model.dto.ArrayDataStore */,
        len: 1,
        formHandler: false
      },
      {
        name: 'createSimpleRecord'/*(java.util.Map) => com.yunfan.mdk.model.dto.SimpleDataStore */,
        len: 1,
        formHandler: false
      },
      {
        name: 'searchRecord'/*(String) => com.yunfan.mdk.model.dto.ArrayDataStore */,
        len: 1,
        formHandler: false
      },
      {
        name: 'deleteRecord'/*(int) => com.yunfan.mdk.model.dto.SimpleDataStore */,
        len: 1,
        formHandler: false
      },
      {
        name: 'updateSimpleRecord'/*(java.util.Map) => com.yunfan.mdk.model.dto.SimpleDataStore */,
        len: 1,
        formHandler: false
      },
      {
        name: 'deleteMultiRecord'/*(Integer[]) => com.yunfan.mdk.model.dto.ArrayDataStore */,
        len: 1,
        formHandler: false
      },
      {
        name: 'createRecord'/*(String, String) => com.yunfan.mdk.model.dto.SimpleDataStore */,
        len: 2,
        formHandler: false
      },
      {
        name: 'readSimpleRecord'/*(java.util.Map) => com.yunfan.mdk.model.dto.ArrayDataStore */,
        len: 1,
        formHandler: false
      }
    ],
    ComponyAction: [
      {
        name: 'readRecord'/*(java.util.Map) => com.yunfan.mdk.model.dto.ArrayDataStore */,
        len: 1,
        formHandler: false
      },
      {
        name: 'readPage'/*(java.util.Map) => com.yunfan.mdk.model.dto.ArrayDataStore */,
        len: 1,
        formHandler: false
      },
      {
        name: 'loadSimpleRecord'/*(String) => com.yunfan.mdk.model.dto.SimpleDataStore */,
        len: 1,
        formHandler: false
      },
      {
        name: 'loadRecord'/*(int) => com.yunfan.mdk.model.dto.SimpleDataStore */,
        len: 1,
        formHandler: false
      },
      {
        name: 'updateProperty'/*(int, java.util.Map) => com.yunfan.mdk.model.dto.SimpleDataStore */,
        len: 2,
        formHandler: false
      },
      {
        name: 'deleteSimpleRecord'/*(java.util.Map) => com.yunfan.mdk.model.dto.SimpleDataStore */,
        len: 1,
        formHandler: false
      },
      {
        name: 'updateRecord'/*(String, String) => com.yunfan.mdk.model.dto.SimpleDataStore */,
        len: 2,
        formHandler: false
      },
      {
        name: 'readDataView'/*(java.util.Map) => com.yunfan.mdk.model.dto.ArrayDataStore */,
        len: 1,
        formHandler: false
      },
      {
        name: 'createSimpleRecord'/*(java.util.Map) => com.yunfan.mdk.model.dto.SimpleDataStore */,
        len: 1,
        formHandler: false
      },
      {
        name: 'searchRecord'/*(String) => com.yunfan.mdk.model.dto.ArrayDataStore */,
        len: 1,
        formHandler: false
      },
      {
        name: 'deleteRecord'/*(int) => com.yunfan.mdk.model.dto.SimpleDataStore */,
        len: 1,
        formHandler: false
      },
      {
        name: 'updateSimpleRecord'/*(java.util.Map) => com.yunfan.mdk.model.dto.SimpleDataStore */,
        len: 1,
        formHandler: false
      },
      {
        name: 'deleteMultiRecord'/*(Integer[]) => com.yunfan.mdk.model.dto.ArrayDataStore */,
        len: 1,
        formHandler: false
      },
      {
        name: 'createRecord'/*(String, String) => com.yunfan.mdk.model.dto.SimpleDataStore */,
        len: 2,
        formHandler: false
      },
      {
        name: 'readSimpleRecord'/*(java.util.Map) => com.yunfan.mdk.model.dto.ArrayDataStore */,
        len: 1,
        formHandler: false
      }
    ]
  }
}

