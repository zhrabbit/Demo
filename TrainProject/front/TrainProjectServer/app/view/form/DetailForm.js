Ext.define('TrainProjectServer.view.form.DetailForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.form-detailform',

    requires: [
        'TrainProjectServer.view.form.DetailFormModel',
        'TrainProjectServer.view.form.DetailFormController'
    ],

    controller: 'form-detailform',
    viewModel: {
        type: 'form-detailform'
    },

    layout: {
        type: 'vbox'
    },
    fieldDefaults: {
        labelAlign: 'left',
        labelWidth: 60,
        anchor: '100%'
    },

    items: [{
        xtype: 'textfield',
        fieldLabel: '公司名称',
        name: 'componyName',
        margin: '5 0 0 0',
        bind: {
            value: '{detail.componyName}'
        }
    }, {
        fieldLabel: '所属区域',
        xtype: 'radiogroup',
        columns: 2,
        vertical: true,
        items: [{
            boxLabel: '高新园区',
            name: 'area',
            inputValue: '高新园区',
            bind: {
                value: '{detail.area.gxy}'
            }
        }, {
            boxLabel: '中山区',
            name: 'area',
            inputValue: '中山区',
            bind: {
                value: '{detail.area.zs}'
            }
        }],
        listeners: {
            change: 'onRadioChange'
        }
    }, {
        xtype: 'combo',
        fieldLabel: '部门',
        emptyText: '请选择',
        name: 'department',
        valueField: 'code',
        displayField: 'dictionaryName',
        mode: 'local',
        readOnly: false,
        bind: {
            store: '{departmentStore}',
            value: '{detail.department}'
        },
        listeners: {
            change: 'onDeptSelectedChange'
        }
    }, {
        xtype: 'combo',
        fieldLabel: '小组',
        emptyText: '请选择',
        name: 'group',
        reference: 'group',
        valueField: 'code',
        displayField: 'dictionaryName',
        mode: 'local',
        readOnly: false,
        bind: {
            store: '{groupStore}',
            value: '{detail.deptGroup}'
        }
    }, {
        xtype: 'numberfield',
        fieldLabel: '女员工数',
        name: 'femaleStaffNumber',
        step: 1,
        bind: {
            value: '{detail.femaleStaffNumber}'
        }
    }, {
        xtype: 'numberfield',
        fieldLabel: '男员工数',
        name: 'maleStaffNumber',
        step: 1,
        bind: {
            value: '{detail.maleStaffNumber}'
        }
    }],

    dockedItems: [{
        dock: 'bottom',
        xtype: 'toolbar',
        items: ['->', {
            xtype: 'button',
            text: '更新',
            handler: 'onSave',
            bind: {
                disabled: '{!currentContext.theSelectedGridRecord}'
            }
        }, {
            xtype: 'button',
            text: '重置',
            handler: 'onReset',
            bind: {
                disabled: '{!currentContext.theSelectedGridRecord}'
            }
        }]
    }]
});