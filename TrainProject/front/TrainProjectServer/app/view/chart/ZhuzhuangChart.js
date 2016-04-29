Ext.define('TrainProjectServer.view.chart.ZhuzhuangChart', {
    extend: 'Ext.chart.CartesianChart',
    alias: 'widget.chart-zhuzhuangchart',

    requires: [
        'TrainProjectServer.view.chart.ZhuzhuangChartModel',
        'Ext.chart.theme.Blue',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Bar3D',
        'Ext.chart.interactions.ItemHighlight',
        'Ext.chart.axis.Category',
        'Ext.chart.axis.Time',
        'Ext.chart.series.Series',
        'Ext.chart.series.Radar',
        'Ext.chart.interactions.Rotate'
    ],

    controller: 'chart-zhuzhuangchart',
    viewModel: {
        type: 'chart-zhuzhuangchart'
    },

    bind: {
        store: '{theRecords}'
    },

    margin: '0 0 3 0',
    cls: 'x-panel-body-default',
    interactions: 'itemhighlight',
    shadow: true,
    // animation: {
    //     easing: 'easeOut',
    //     duration: 300
    // },
    style: {
        border: 0
    },
    axes: [{
        type: 'numeric',
        position: 'left',
        fields: 'femaleStaffNumber',
        minimum: 0
    }, {
        type: 'category',
        position: 'bottom',
        fields: ['groupName'],
        label: {
            renderer: function(v) {
                return Ext.String.ellipsis(v, 15, false);
            }
        }
    }],
    series: {
        type: 'bar3d',
        axis: 'left',
        style: {
            fill: '#456d9f'
        },
        highlight: {
            fillStyle: '#619fff',
            strokeStyle: 'black'
        },
        label: {
            contrast: true,
            display: 'insideEnd',
            field: 'femaleStaffNumber',
            color: '#000',
            orientation: 'vertical',
            'text-anchor': 'middle'
        },
        xField: 'groupName',
        yField: 'femaleStaffNumber',
        renderer: (function() {
            var colors = [
                '#8ca640',
                '#974144',
                '#4091ba',
                '#8e658e',
                '#3b8d8b',
                '#b86465',
                '#d2af69',
                '#6e8852',
                '#3dcc7e',
                '#a6bed1',
                '#cbaa4b',
                '#998baa',
                '#FF79BC',
                '#02C874',
                '#EA7500',
                '#484891',
                '#808040',
                '#B87070',
                '#8CEA00',
                '#CA8EFF',
                '#613030'
            ];

            return function(sprite, config, data, index) {
                return {
                    fillStyle: colors[index],
                    strokeStyle: index % 2 ? 'none' : 'black',
                    opacity: index % 2 ? 1 : 0.5
                };
            };
        })()
    },

    sprites: [{
        type: 'text',
        fontSize: 22,
        width: 100,
        height: 30,
        x: 40, // the sprite x position
        y: 40 // the sprite y position
    }],

    listeners: {
        itemhighlight: 'onItemHighlight'
    }
});