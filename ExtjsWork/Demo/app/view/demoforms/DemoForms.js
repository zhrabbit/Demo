/*!
 * Moft Application
 * Copyright(c) 2012-2016 Yunfan Inc.
 *
 * Description:
 *
 * Author: ZhangShy
 * Date: 2016/04/06
 * ChangeLog:
 * No.    Date.         Modifier              Description
 */
/**
 * @class
 * @extends Ext.
 * @xtype
 * @requires
 */
Ext.define('Demo.view.demoforms.DemoForms', {
    extend: 'Ext.form.Panel',
    alias: 'widget.demoforms-demoforms',

    requires: [
        'Demo.view.demoforms.DemoFormsController',
        'Demo.view.demoforms.DemoFormsModel'
    ],

    controller: 'demoforms-demoforms',
    viewModel: {
        type: 'demoforms-demoforms'
    },

    id: 'myForm',
    frame: true,
    title: '公司信息',
    bodyPadding: 10,
    width: 400,
    reference: 'formcontrol',
    
    dockedItems: [{
        xtype: 'toolbar',
        plain: true,
        dock: 'bottom', //位置
        defaults: {
            xtype: 'button',
            disabled: true
        },

        items: ['->', {
            text: '还原',
            handler: 'onReject',
            glyph: 0xf01e,
            bind: {
                disabled: '{!status.dirty}'
            }
        }]
    }],

    items: [{
        //Text Field
        xtype: 'textfield',
        width: 370,
        name: 'companyName',
        layout: 'form',
        fieldLabel: '公司名',
        emptyText: '公司名称...',
        bind: '{currentComany.record.company}'
    }, {
        //Radio Group
        xtype: 'fieldset',
        title: '地区选择',
        layout: 'anchor',
        collapsible: true,
        defaults: {
            anchor: '100%'
        },

        items: [{
            xtype: 'radiogroup',
            frame: true,
            fieldDefaults: {
                labelWidth: 120
            },
            columns: 3,
            items: [{
                boxLabel: '高新园区',
                name: 'area',
                inputValue: '高新园区',
                checked: true
            }, {
                boxLabel: '中山区',
                name: 'area',
                inputValue: '中山区'
            }, {
                boxLabel: '甘井子区',
                name: 'area',
                inputValue: '甘井子区'
            }, {
                boxLabel: '西岗区',
                name: 'area',
                inputValue: '西岗区'
            }, {
                boxLabel: '沙河口区',
                name: 'area',
                inputValue: '沙河口区'
            }]
        }]
    }, {
        //Combobox 1
        name: 'area',
        id: 'area_id',
        xtype: 'combo',
        fieldLabel: '所属区域',
        emptyText: '地区...',
        readOnly: false,
        triggerAction: 'all',
        autoSelect: false,
        forceSelection: true,
        queryMode: 'local',
        autoLoad: true,
        matchFieldWidth: false,
        reference: 'areaData',
        bind: {
            value: '{currentComany.record.area}',
            store: '{theAreaStore}'
        },
        valueField: 'values',
        displayField: 'name',
        listeners: {
            // afterrender: 'onAfterRender',
            change: 'onSelectChanged'
        }
    }, {
        //Combobox 2
        name: 'stree',
        id: 'stree_id',
        reference: 'streeData',
        xtype: 'combo',
        fieldLabel: '所属街道',
        emptyText: '街道...',
        matchFieldWidth: false,
        readOnly: false,
        triggerAction: 'all',
        bind: {
            value: '{currentComany.record.streename}',
            store: '{theStreeStore}'
        },
        valueField: 'value',
        displayField: 'streename'
    }, {
        xtype: 'numberfield',
        fieldLabel: '男职工人数',
        bind: {
            value: '{currentComany.record.maleNo}'
        },
        // value: 1,
        minValue: 1,
        maxValue: 125
    }, {
        xtype: 'numberfield',
        fieldLabel: '女职工人数',
        bind: {
            value: '{currentComany.record.femaleNo}'
        },
        // value: 1,
        minValue: 1,
        maxValue: 125
    }]


});