/**
 * Moft Application
 * Copyright(c) 2012-2016 Yunfan Inc.
 *
 * Description:
 *
 * Author: xxx
 * Date: 2016/xx/xx
 * ChangeLog:
 * No.    Date.         Modifier              Description
 */
Ext.define('Demo.view.main.Main', {
    extend: 'Ext.container.Container',
    alias: 'widget.main-main',

    requires: [
        'Demo.view.main.MainController',
        'Demo.view.main.MainModel',
        'Demo.view.selectTree.SelectTree',
        'Demo.view.demoforms.DemoForms',
        'Demo.view.demogrids.DemoGrids',
        'Demo.view.democharts.DemoCharts'
    ],

    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    defaults: {
        xtype: 'panel',
        split: {
            size: 3
        }
        //collapsible: true
    },

    items: [{
        //Display Tree
        region: 'west',
        title: '<b>大连市各区公司信息</b>',
        width: 200,
        // flex: 0.2,
        items: [{
            xtype: 'selectTree-selecttree',
            //监听Tree通知的选项变更event
            listeners: {
                evtSelectChanged: 'onTreeSelectChanged'
            }
        }]
    }, {
        //Display Charts & Grid
        region: 'center',
        title: '图表',
        // split: false,
        items: [{
            xtype: 'democharts-democharts'
        }, {
            // reference: 'companyGrid',
            xtype: 'demogrids-demogrids',
            //监听Grid通知的选项变更event
            listeners: {
                evtTitleChanged: 'onEvtTitleChanged'
            }
        }]
    }, {
        //Display Forms
        region: 'east',
        title: '选项',
        width: 400,
        // split: false,
        items: [{
            xtype: 'demoforms-demoforms'
        }]
    }],

    initComponent: function() {
        var me = this;
        Ext.setGlyphFontFamily('FontAwesome');// 设置图标字体文件，只有设置了以后才能用glyph属性
        me.callParent();
    }
});