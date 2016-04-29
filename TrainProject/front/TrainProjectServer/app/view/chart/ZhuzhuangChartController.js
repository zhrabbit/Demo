Ext.define('TrainProjectServer.view.chart.ZhuzhuangChartController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.chart-zhuzhuangchart',

    onItemHighlight: function(item) {
        var me = this;
        var vModel = me.getViewModel();
        var record = item.record;

        vModel.set('currentContext.theSelectedGridRecord', record);
    }
});