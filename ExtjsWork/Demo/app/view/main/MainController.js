/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Demo.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    requires: [
        'Ext.window.MessageBox'
    ],

    onTreeSelectChanged: function(text) {
        var me = this;
        var vModel = me.getViewModel();
        vModel.set('titleName', text);
        var chart = me.lookupReference('charcontorl'); //获取chart对象
        var vChartModel = chart.getViewModel();
        vChartModel.set('theSearchData', text);
    },

    onEvtTitleChanged: function(value) {
        var me = this;
        var chart = me.lookupReference('charcontorl'); //获取chart对象
        var vChartModel = chart.getViewModel();
        var grid = me.lookupReference('companyGrid');
        var gridStore = grid.getStore();
        var totalPeople = null;
        for (var i = 0; i < gridStore.data.length; i++) {
            totalPeople += gridStore.data.items[i].data.maleNo + gridStore.data.items[i].data.femaleNo;
        }
        vChartModel.set('theTotalPeople', totalPeople);

        var firstValue = gridStore.getAt(0);
        grid.setSelection(firstValue);
    }
});