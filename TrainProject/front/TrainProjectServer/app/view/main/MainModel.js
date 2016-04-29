/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('TrainProjectServer.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main-main',

    requires: [
    	'TrainProjectServer.store.Componys'
    ],

    data: {
        currentContext: {
            theSelectedNode: null,
            theSelectedCompanyName: null,
            theSelectedGridRecord: null
        }
    },

    formulas: {
        executeTreeNodeChange: {
            bind: '{currentContext.theSelectedNode}',
            get: function(selectedNode) {
                var me = this;
                var store = me.get('theRecords');
                if (selectedNode == null) {
                    return;
                }

                store.removeAll();
                store.load();
            }
        },
    },

    stores: {
    	theRecords: {
    		type: 'componys',
            listeners: {
                beforeload: 'onRecordsBeforeLoad',
                // load: 'onLoad'
            }
    	}
    }
});