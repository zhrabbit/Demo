Ext.define('TrainProjectServer.view.grid.ListGrid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.grid-listgrid',

	requires: [
		'TrainProjectServer.view.grid.ListGridController',
		'TrainProjectServer.view.grid.ListGridModel'
	],

	controller: 'grid-listgrid',
	viewModel: {
		type: 'grid-listgrid'
	},

	bind: {
		store: '{theRecords}',
		selection: '{currentContext.theSelectedGridRecord}'
	},

	resizable: true,
	scrollable: true,
	viewConfig: {
		columnLines: true,
		trackOver: false,
		loadMask: false
	},

	tbar: {
		xtype: 'toolbar',
		items: ['->', {
			xtype: 'button',
			text: '添加',
			handler: 'onAdd'
		}]
	},

	columns: [{
		xtype: 'rownumberer',
		text: '序号',
		resizable: true,
		align: 'center',
		flex: 0.4
	}, {
		text: '公司名称',
		dataIndex: 'componyName',
		tooltip: '公司名称',
		align: 'center',
		flex: 1
	}, {
		text: '所属区域',
		dataIndex: 'area',
		tooltip: '所属区域',
		align: 'center',
		flex: 1
	}, {
		text: '部门',
		dataIndex: 'departmentName',
		tooltip: '部门',
		align: 'center',
		flex: 1
	}, {
		text: '小组',
		dataIndex: 'groupName',
		tooltip: '小组',
		align: 'center',
		flex: 1
	}, {
		text: '女员工数',
		dataIndex: 'femaleStaffNumber',
		tooltip: '女员工数',
		align: 'center',
		flex: 1
	}, {
		text: '男员工数',
		dataIndex: 'maleStaffNumber',
		tooltip: '男员工数',
		align: 'center',
		flex: 1
	}, {
		xtype: 'actioncolumn',
		align: 'center',
		width: 80,
		items: [{
			icon: 'resources/images/delete.png',
			tooltip: 'Delete',
			handler: function(grid, rowIndex, colIndex) {
					var rec = grid.getStore().getAt(rowIndex);
					debugger
					rec.erase({
						callback: function(self, operaion, successful) {
							if (successful) {
								// debugger
								// me.fireViewEvent('evtRecordSaveComplete', self, operaion);
							}
						}
					});
					// alert("Terminate " + rec.get('componyName'));
				}
				// handler: 'ondelete',
		}]
	}]

});