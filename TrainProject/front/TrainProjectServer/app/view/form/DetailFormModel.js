Ext.define('TrainProjectServer.view.form.DetailFormModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.form-detailform',

    requires: [
        'TrainProjectServer.store.Dictionary'
    ],

    data: {
        detail: {
            componyName: null,
            area: {
                gxy: false,
                zs: false
            },
            department: null,
            deptGroup: null,
            femaleStaffNumber: 0,
            maleStaffNumber: 0
        }
    },

    formulas: {
        viewShowData: {
            bind: {
                bindTo: '{currentContext.theSelectedGridRecord}',
                deep: true
            },
            get: function(gridRecord) {
                var me = this;
                if (gridRecord == null) {
                    return;
                }
                me.set('detail.componyName', gridRecord.get('componyName'));
                me.set('detail.department', gridRecord.get('department'));
                me.set('detail.deptGroup', gridRecord.get('deptGroup'));
                me.set('detail.femaleStaffNumber', gridRecord.get('femaleStaffNumber'));
                me.set('detail.maleStaffNumber', gridRecord.get('maleStaffNumber'));

                var area = gridRecord.get('area');
                if (area == "高新园区") {
                    me.set('detail.area.gxy', true);
                } else if (area == "中山区") {
                    me.set('detail.area.zs', true);
                }
            }
        },
        commitRecord: {
            bind: {
                bindTo: '{detail}',
                deep: true
            },
            get: function(detail) {
                var me = this;
                var model = null;
                var currentRecord = me.get('currentContext.theSelectedGridRecord');
                if (currentRecord == null) {
                    model = Ext.create('TrainProjectServer.model.Compony');
                } else {
                    model = Ext.create('TrainProjectServer.model.Compony', currentRecord.data);
                }
                Ext.Object.each(detail, function(key, value, self) {
                    if (!Ext.isObject(value)) {
                        model.set(key, value);
                    }
                });
                if (detail.area.gxy) {
                    model.set('area', '高新园区');
                }
                if (detail.area.zs) {
                    model.set('area', '中山区');
                }

                return model;
            }
        },
        theSelectedArea: {
            bind: '{currentContext.theSelectedNode}',
            get: function(selectedNode) {
                var me = this;
                if(selectedNode == null) {
                    return;
                }
                var area = null;
                var modelType = selectedNode.get('modelType');
                if (modelType == "tree.area") {
                    area = selectedNode.get('text');
                } else if(modelType == "tree.compony") {
                    area = selectedNode.get('area');
                }
                return area;
            }
        }
    },

    stores: {
        departmentStore: {
            type: 'dictionary',
            filters: {
                property: 'dictionaryType',
                value: 'dept'
            }
        },

        groupStore: {
            type: 'dictionary',
            filters: {
                property: 'dictionaryType',
                value: 'group'
            }
        }
    }

});