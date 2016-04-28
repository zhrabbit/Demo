/**
 * @class  
 * @extends Ext.
 * @xtype 
 * @mixins Gearbox.mixin.ModelInfo,
 * @mixins Gearbox.mixin.Logger
 * @requires 
 */
Ext.define('Demo.view.democharts.DemoCharsController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.democharts-demochars',

	onItemclick: function(series, item, event, eOpts) {
		var me = this;
		var vModel = me.getViewModel();
		vModel.set('currentComany.record', item.record);
	}
});