Ext.define('TrainProjectServer.view.grid.ListGridController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.grid-listgrid',

	onUpdateRecord: function(grid, rowIndex, colIndex, item, event, record, row) {
		var me = this;
		grid.setSelection(record);
	},

	onAdd: function() {
		var record = Ext.create('TrainProjectServer.model.Compony', {
			code: 'aaa',
			componyName: '大连云帆科技'
		});
		
		record.save({
			callback: function(self, operaion, successful) {
				//TODO
			}
		});
	},

	ondelete: function() {
		var me = this;
		var vModel = me.getViewModel();
		// var record = vModel.getStore('theListStore');
		debugger
		// console.debug(record);
		record.erase({
			callback: function(self, operaion, successful) {
				if (successful) {
					// debugger
					// me.fireViewEvent('evtRecordSaveComplete', self, operaion);
				}
			}
		});
	}
});