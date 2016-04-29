Ext.define('TrainProjectServer.view.grid.ListGridModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.grid-listgrid',

    requires: [
        'Ext.data.ChainedStore'
    ],

    stores: {
        theListStore: {
            type: 'chained',
            source: '{theRecords}',
            filters: {
                property: 'componyName',
                value: '{currentContext.theSelectedCompanyName}'
            }
        }
    }

});