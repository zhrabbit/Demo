/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Demo.view.main.MainModel', {
	extend: 'Ext.app.ViewModel',

	alias: 'viewmodel.main',

	data: {
		titleName: '公司具体信息',
		currentComany: {
			record: null
		}
	},

	stores: {
		theCompanyData: {
			type: 'companydata',
			autoLoad: true
		}
	}
});