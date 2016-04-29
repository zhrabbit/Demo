Ext.define('TrainProjectServer.model.NaviTree', {
	extend: 'Ext.data.Model',

	idProperty: 'code',

	fields: [{
		name: 'text',
		type: 'string'
	}, {
		name: 'code',
		type: 'string'
	}]
});