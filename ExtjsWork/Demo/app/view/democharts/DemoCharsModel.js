/**
 * @class  
 * @extends Ext.
 * @xtype 
 * @mixins Gearbox.mixin.ModelInfo,
 * @mixins Gearbox.mixin.Logger
 * @requires 
 */
Ext.define('Demo.view.democharts.DemoCharsModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.democharts-demochars',

	data: {
		theSearchData: null,
		theTotalPeople: null
	}

});