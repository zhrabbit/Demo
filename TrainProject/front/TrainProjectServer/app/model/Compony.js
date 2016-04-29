Ext.define('TrainProjectServer.model.Compony', {
	extend: 'Ext.data.Model',

	fields: [{
		name: 'code',
		type: 'string'
	}, {
		name: 'componyName',
		type: 'string'
	}, {
		name: 'area',
		type: 'string'
	}, {
		name: 'department',
		type: 'string'
	}, {
		name: 'deptGroup',
		type: 'string'
	}, {
		name: 'femaleStaffNumber',
		type: 'int'
	}, {
		name: 'maleStaffNumber',
		type: 'int'
	}, {
		name: 'departmentName',
		type: 'string'
	}, {
		name: 'groupName',
		type: 'string'
	}],

	proxy: {
		type: 'direct',
		reader: {
			type: 'json',
			rootProperty: 'contents'
		},
		api: {
			create: 'ComponyAction.createSimpleRecord',
			read: 'ComponyAction.readSimpleRecord',
			update: 'ComponyAction.updateSimpleRecord',
			destroy: 'ComponyAction.deleteSimpleRecord'
		}
	}
});