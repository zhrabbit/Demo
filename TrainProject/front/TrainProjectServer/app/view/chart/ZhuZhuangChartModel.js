Ext.define('TrainProjectServer.view.chart.ZhuzhuangChartModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.chart-zhuzhuangchart',

	requires: [
        'Ext.data.ChainedStore'
    ],

    stores: {
    	theChartStore: {
    		type: 'chained',
            source: '{theRecords}',
            filters: {
                property: 'componyName',
                value: '{currentContext.theSelectedCompanyName}'
            }
    	}
    }

});