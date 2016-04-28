/**
 * @class  
 * @extends Ext.
 * @xtype 
 * @mixins Gearbox.mixin.ModelInfo,
 * @mixins Gearbox.mixin.Logger
 * @requires 
 */
Ext.define('Demo.view.democharts.DemoCharts', {
	extend: 'Ext.chart.CartesianChart',
	alias: 'widget.democharts-democharts',

	requires: [
		'Demo.view.democharts.DemoCharsController',
		'Demo.view.democharts.DemoCharsModel',
		'Ext.chart.theme.Muted',
		'Ext.chart.axis.Numeric3D',
		'Ext.chart.series.Bar3D',
		'Ext.chart.axis.sprite.Axis3D',
		'Ext.chart.grid.HorizontalGrid3D',
		'Ext.chart.axis.Category3D',
		'Ext.chart.grid.VerticalGrid3D',
		'Demo.store.CompanyData',
		'Ext.chart.interactions.ItemHighlight',
		'Ext.chart.plugin.ItemEvents'
	],

	controller: 'democharts-demochars',
	viewModel: {
		type: 'democharts-demochars'
	},

	id: 'myCharts',
	frame: true,
	title: '柱状图显示',
	// renderTo: 'container',
	width: 1312,
	height: 500,
	reference: 'charcontorl',
	// layout: 'fit',
	bind: {
		store: '{theCompanyData}',
		sprites: [{
			type: 'text',
			text: '{theSearchData}',
			fontSize: 14,
			fontWeight: 'bold',
			fillStyle: '#fa6800',
			width: 160,
			height: 30,
			x: 100,
			y: 24
		}, {
			type: 'text',
			text: '总人数(单位：人):',
			fontSize: 14,
			fontWeight: 'bold',
			width: 160,
			height: 30,
			x: 170,
			y: 24
		}, {
			type: 'text',
			text: '{theTotalPeople}',
			fontSize: 14,
			fontWeight: 'bold',
			fillStyle: '#fa6800',
			width: 160,
			height: 30,
			x: 310,
			y: 24
		}]
	},

	insetPadding: 5,
	innerPadding: {
		top: 24,
		right: 10,
		// bottom: 10,
		left: 10
	},
	width: '100%',

	legend: {
		docked: 'top'
	},

	plugins: {
		ptype: 'chartitemevents',
		moveEvents: true
	},

	axes: [{
		type: 'numeric3d',
		position: 'left',
		fields: ['maleNo', 'femaleNo'],
		maximum: 125,
		minimum: 0,
		majorTickSteps: 25,
		minorTickSteps: 5,
		label: {
			textAlign: 'right'
		},
		//纵坐标刻度计算
		renderer: function(v, layoutContext) {
			return Ext.util.Format.number(layoutContext.renderer(v), '0,000');
		},
		title: '男/女职工人数',
		grid: true
	}, {
		type: 'category3d',
		position: 'bottom',
		fields: 'company',
		grid: {
			odd: {
				fillStyle: 'rgba(255, 255, 255, 0.06)'
			},
			even: {
				fillStyle: 'rgba(0, 0, 0, 0.03)'
			}
		}
	}],
	series: [{
		type: 'bar3d',
		axis: 'left',
		xField: 'company',
		yField: ['maleNo', 'femaleNo'],
		title: ['男职工人数', '女职工人数'],
		stacked: false,
		style: {
			minGapWidth: 20
		},
		// marker: true,

		highlightCfg: {
			scale: 4,
			fillStyle: 'gold',
			highlightCfg: 5
		},
		// highlight: true,
		label: {
			field: ['maleNo', 'femaleNo'],
			display: 'insideEnd',
			renderer: function(v) {
				return Ext.util.Format.number(v, '0,000');
			}
		},
		tooltip: {
			trackMouse: true,
			// style: 'background: #fff',
			style: 'background: #fff588;color:#bf5a15;',
			renderer: function(storeItem, item) {
				var title = null;
				if (item.field === 'maleNo') {
					title = '男职工人数';
				} else {
					title = '女职工人数';
				}
				this.setHtml(title + ': ' +
					Ext.util.Format.number(storeItem.get(item.field), '0,000'));
			}
		},

		listeners: {
			itemclick: 'onItemclick'
		}
	}]
});