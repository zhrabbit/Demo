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
Ext.define('Demo.view.selectTree.SelectTreeController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.selectTree-selecttree',

	//Tree选项变更后给Main发送event，通知节点name。
	onTreeSelectionChange: function(tree, selected, eOpts) {
		var me = this;
		if (selected.length == 0) {
			return;
		}
		var record = selected[0];
        if(record.isLeaf()) {
           return;
        }
		// 自定义event：evtSelectChanged
		me.fireViewEvent('evtSelectChanged', record.get('name'));

	}
});