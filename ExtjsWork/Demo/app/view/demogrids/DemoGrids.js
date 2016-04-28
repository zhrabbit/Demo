/**
 * @class Demo.view.demogrids.DemoGrids
 * @extends Ext.grid.Panel
 * aliastype DemoviewdemogridsDemoGrids
 * @mixins Gearbox.mixin.ModelInfo,
 * @mixins Gearbox.mixin.Logger
 * @requires 
 */
Ext.define('Demo.view.demogrids.DemoGrids', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.demogrids-demogrids',

	requires: [
		'Demo.view.demogrids.DemoGridsController',
		'Demo.view.demogrids.DemoGridsModel',
		'Demo.view.common.GridToolbars'
	],

	controller: 'demogrids-demogrids',
	viewModel: {
		type: 'demogrids-demogrids'
	},

	plugins: [{
		ptype: 'cellediting',
		clicksToEdit: 2,
		pluginId: 'cellediting'
	}],

	id: 'myGrid',
	frame: true,
	reference: 'companyGrid',

	bind: {
		title: '<b>{titleName}</b>',
		store: '{theCompanyData}',
		selection: '{currentComany.record}'
	},

	dockedItems: [{
		xtype: 'common-gridtoolbars',
		dock: 'top' //分页 位置
	}, {
		xtype: 'pagingtoolbar',
		bind: {
			store: '{theCompanyData}'
		}, // same store GridPanel is using
		dock: 'bottom', //分页 位置
		emptyMsg: '没有数据',
		displayInfo: true,
		displayMsg: '当前显示{0}-{1}条记录 / 共{2}条记录 ',
		beforePageText: '第',
		afterPageText: '页/共{0}页'
	}],

	//定义列
	columns: {
		items: [{
			// xtype: 'gridcolumn',
			text: 'Company',
			dataIndex: 'company',
			align: 'center',
			sortable: true,
			editable: false,
			width: 260,
			editor: {
				bind: '{currentComany.record.company}',
				selectOnFocus: true
			}
		}, {
			text: 'Area',
			dataIndex: 'area',
			align: 'center',
			sortable: true,
			editable: false,
			width: 260,
			editor: {
				// xtype: 'textfield'
				bind: '{currentComany.record.area}',
				selectOnFocus: true
			}
		}, {
			text: 'Address',
			dataIndex: 'streename',
			align: 'center',
			sortable: true,
			editable: false,
			width: 260,
			editor: {
				bind: '{currentComany.record.streename}',
				selectOnFocus: true
			}
		}, {
			text: 'Male',
			dataIndex: 'maleNo',
			align: 'center',
			sortable: true,
			editable: false,
			width: 260,
			editor: {
				bind: '{currentComany.record.maleNo}',
				selectOnFocus: true
			}
		}, {
			text: 'Female',
			dataIndex: 'femaleNo',
			align: 'center',
			sortable: true,
			editable: false,
			width: 260,
			editor: {
				bind: '{currentComany.record.femaleNo}',
				selectOnFocus: true
			}
		}]
	},

	listeners: {
		selectionchange: 'onSelectionChanged'
	}
});