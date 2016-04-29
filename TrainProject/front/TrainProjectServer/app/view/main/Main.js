/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('TrainProjectServer.view.main.Main', {
    extend: 'Ext.container.Container',

    alias: 'widget.main-main',
    requires: [
        'TrainProjectServer.view.main.MainController',
        'TrainProjectServer.view.main.MainModel',
        'TrainProjectServer.view.tree.NaviTree',
        'TrainProjectServer.view.chart.ZhuzhuangChart',
        'TrainProjectServer.view.grid.ListGrid',
        'TrainProjectServer.view.form.DetailForm'
    ],

    controller: 'main-main',
    viewModel: {
        type: 'main-main'
    },

    layout: {
        type: 'border'
    },

    items: [{
        xtype: 'tree-navitree',
        region: 'west',
        width: 250,
        split: true,
        listeners: {
            evtTreeSelected: 'onNaviTreeSelected'
        }
    }, {
        region: 'center',
        xtype: 'panel',
        border: true,
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'chart-zhuzhuangchart',
            flex: 1
        }, {
            xtype: 'grid-listgrid',
            flex: 1,
            border: true
        }]
    }, {
        xtype: 'form-detailform',
        region: 'east',
        width: 250,
        split: true
    }]
});