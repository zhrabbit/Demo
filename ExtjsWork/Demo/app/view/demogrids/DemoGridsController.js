/**
 * @class Demo.view.demogrids.DemoGridsController 
 * @extends Ext.app.ViewController.
 * @alias controller.demogrids-demogrids
 * @mixins Gearbox.mixin.ModelInfo,
 * @mixins Gearbox.mixin.Logger
 * @requires
 */
Ext.define('Demo.view.demogrids.DemoGridsController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.demogrids-demogrids',

	init: function() {
		var me = this;
		var vModel = me.getViewModel().getParent(); //获取父类viewmodel
		// var theGridStore = vModel.getStore('theCompanyData');
		// theGridStore.load({ //传入分页参数；
		// 	params: {
		// 		start: 1,
		// 		limit: 2
		// 	}
		// });
		vModel.bind('{titleName}', me.onTitleChanged, me);
	},

	onTitleChanged: function(value1) {
		var me = this;
		me.value = value1;
		var vModel = me.getViewModel().getParent();//获取父类viewmodel
		var theGridData = vModel.getStore('theCompanyData');
		//根据Title进行筛选
		theGridData.filterBy(function(record) {
			return record.get('area') == this.value;
		}, me);
		// 自定义event：evtSelectChanged
		me.fireViewEvent('evtTitleChanged', value1);
	},

	onSelectionChanged: function(this1, selected, eOpts) {
		// debugger
	}
});