/**
 * Moft Application
 * Copyright(c) 2012-2016 Yunfan Inc.
 *
 * Description:
 *
 * Author: xxx
 * Date: 2016/xx/xx
 * ChangeLog:
 * No.    Date.         Modifier              Description
 */
/**
 * @class
 * @extends Ext.
 * @xtype
 * @requires
 */
Ext.define('Demo.view.selectTree.SelectTreeModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.selectTree-selecttree',

	stores: {
		theSelectTreeNode: {
			type: 'tree',
        	root: {
        		expanded: true
        	},
			//Json数据源
        	proxy: {
        		type: 'ajax',
        		url: 'resources/data/TreeData.json',
        		reader: {
        			type: 'json'
        		}
        	}
		}

		// theSelectTreeNode: Ext.create('Ext.data.TreeStore', {
		// 	// rootVisible: true,
		// 	root: {
		// 		text: '大连市',
		// 		expanded: true,
		// 		leaf: false,
		// 		children: [{
		// 			leaf: false,
		// 			text: '高新园区',
  //                   children: [{
		// 			    leaf: true,
		// 			    text: '云帆'
		// 		    }, {
		// 			    leaf: true,
		// 			    text: '东软'
		// 		    }, {
		// 			    leaf: true,
		// 			    text: 'IBM'
		// 		    }, {
		// 			    leaf: true,
		// 			    text: '大米'
		// 		    }]
		// 		}, {
		// 			leaf: false,
		// 			text: '中山区',
		// 			children:[{
		// 				leaf: true,
		// 				text: '东来国旅'
		// 			}, {
		// 				leaf: true,
		// 				text: '日报社'
		// 			}]
		// 		}, {
		// 			leaf: false,
		// 			text: '甘井子区',
		// 			children: [{leaf: true, text: '大华'},
		// 			{leaf: true, text: '驰敖'},
		// 			{leaf: true, text: '中远'}]
		// 		}, {
		// 			leaf: false,
		// 			text: '西岗区',
		// 			children: [{leaf: true, text: '半岛晨报'}]
		// 		}, {
		// 			leaf: false,
		// 			text: '沙河口区',
		// 			children: [{leaf: true, text: '可口可乐'}]
		// 		}]
		// 	}
		// })

	}
});