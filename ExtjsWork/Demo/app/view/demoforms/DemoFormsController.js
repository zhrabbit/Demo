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
Ext.define('Demo.view.demoforms.DemoFormsController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.demoforms-demoforms',

	onAfterRender: function(this1, eOpts) {
		// debugger
		var me = this;
		var vModel = me.getViewModel();
		var theAreaStore = vModel.getStore('theAreaStore');
		var areaCombox = this.lookupReference('areaData');
		var firstValue = theAreaStore.getAt(0);
		areaCombox.setValue(firstValue.get('values')); //同时下拉框会将与name为firstValue值对应的 text显示
	},

	onSelectChanged: function(this1, newValue, oldValue, eOpts) {
		var me = this;
		var vModel = me.getViewModel();
		var theStreeStore = vModel.get('theStreeStore');   
		theStreeStore.clearFilter();
		theStreeStore.filterBy(function(record) {                        
			return  record.get('area') == newValue;                        
		});
		//设置第一个值为初始值
		// var firstRecod = theStreeStore.getAt(0);
		// var streetCombo = this.lookupReference('streeData');
		// streetCombo.setValue(firstRecod.get('value'));           
	},

	//Reject button handler
	onReject: function() {
		var cust = this.getViewModel().get('currentComany.record');
		cust.reject();
	}
});