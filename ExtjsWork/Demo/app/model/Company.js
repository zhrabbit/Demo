/**
 * @class Demo.model.Company Demo.model.Company
 * @extends Ext.
 * @xtype DemomodelCompany
 * @mixins Gearbox.mixin.ModelInfo,
 * @mixins Gearbox.mixin.Logger
 * @requires 
 */
Ext.define('Demo.model.Company', {
	extend: 'Ext.data.Model',

	fields: [{
		name: 'company',
		type: 'string'
	}, {
		name: 'area',
		type: 'string'
	}, {
		name: 'streename',
		type: 'string'
	}, {
		name: 'maleNo',
		type: 'int'
	}, {
		name: 'femaleNo',
		type: 'int'
	}],

	proxy: {
		type: 'direct',
		reader: {
			type: 'json',
			rootProperty: 'contents'
		},
		api: {
			create: 'CompanyAction.createSimpleRecord',
			read: 'CompanyAction.readSimpleRecord',
			update: 'CompanyAction.updateSimpleRecord',
			destroy: 'CompanyAction.deleteSimpleRecord'
		}
	}

});