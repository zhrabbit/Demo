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
 * @class  Demo.view.selectTree.SelectTree
 * @extends Ext.tree.Panel
 * @alias widget.selectTree-selectTree
 * @requires
 */
Ext.define('Demo.view.selectTree.SelectTree', {
	extend: 'Ext.tree.Panel',
	alias: 'widget.selectTree-selecttree',

	/**
	 * @requires
	 */
	requires: [
		'Demo.view.selectTree.SelectTreeController',
        'Demo.view.selectTree.SelectTreeModel'
	],

    controller: 'selectTree-selecttree',
    viewModel: {
    	type: 'selectTree-selecttree'
    },

    bind: {
    	store: '{theSelectTreeNode}' //绑定Tree数据
    },

    rootVisible: true, //根节点不显示
    useArrows: true,
    scrollable: true,
    hideHeaders: true,

    listeners: {
        selectionchange: 'onTreeSelectionChange'//监听Tree选项变更，自带event
    }
});