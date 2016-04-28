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
Ext.define('Demo.view.demoforms.DemoFormsModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.demoforms-demoforms',

	formulas: {
		status: {
			// 深度绑定，以保障每个下属model改变都会通知
			bind: {
				bindTo: '{currentComany.record}',
				deep: true
			},

			get: function(record) {
				var ret = {
					dirty: record ? record.dirty : false,
					valid: record && record.isModel ? record.isValid() : false
				};
				ret.dirtyAndValid = ret.dirty && ret.valid;
				return ret;
			}
		}
	},

	stores: {
		theAreaStore: {
			autoLoad: true,
			fields: ['name', 'values'],
			data: [{
				name: '高新园区',
				values: '高新园区'
			}, {
				name: '中山区 ',
				values: '中山区'
			}, {
				name: '甘井子区',
				values: '甘井子区'
			}, {
				name: '西岗区',
				values: '西岗区'
			}, {
				name: '沙河口区',
				values: '沙河口区'
			}]
		},

		theStreeStore: {
			//autoLoad: true,
			// filterOnLoad: true,
			fields: ['area', 'streename', 'value'],
			data: [{
				area: '高新园区',
				streename: '高新区街道1',
				value: '高新区街道1'
			}, {
				area: '高新园区',
				streename: '高新区街道2',
				value: '高新区街道2'
			}, {
				area: '高新园区',
				streename: '高新区街道3',
				value: '高新区街道3'
			}, {
				area: '中山区',
				streename: '中山区街道1',
				value: '中山区街道1'
			}, {
				area: '中山区',
				streename: '中山区街道2',
				value: '中山区街道2'
			}, {
				area: '甘井子区',
				streename: '甘井子区街道1',
				value: '甘井子区街道1'
			}, {
				area: '甘井子区',
				streename: '甘井子区街道2',
				value: '甘井子区街道2'
			}, {
				area: '西岗区',
				streename: '西岗区街道1',
				value: '西岗区街道1'
			}, {
				area: '沙河口区',
				streename: '沙河口区街道1',
				value: '沙河口区街道1'
			}]
		}
	}
});