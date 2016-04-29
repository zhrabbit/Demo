Ext.define('TrainProjectServer.view.form.DetailFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.form-detailform',

    onRadioChange: function(radioGroup, newValue, oldValue) {
        var me = this;
        var vModel = me.getViewModel();
        var theSelectedArea = vModel.get('theSelectedArea');
        if(theSelectedArea == null) {
            return;
        }
        if(newValue.area == null) {
            return;
        }
        if(newValue.area != theSelectedArea) {
            Ext.Msg.alert('提示', '只能选择所在区域');
            radioGroup.setValue({
                area: theSelectedArea
            })
        }
    },

    onDeptSelectedChange: function(rec) {
        var me = this;
        var view = me.getView();
        var combo = view.lookupReference('group');
        // combo.setValue('');

        var type = rec.value;

        var viewModel = me.getViewModel();
        var groupStore = viewModel.get('groupStore');

        groupStore.clearFilter();
        groupStore.filter('parentUuid', type);

        var groupValue = viewModel.get('detail.deptGroup');
        combo.setValue(groupValue);
    },

    onSave: function() {
        var me = this;
        var vModel = me.getViewModel();
        var record = vModel.get('commitRecord');
        console.debug(record);
        record.save({
            callback: function(self, operaion, successful) {
                if (successful) {
                    // debugger
                    // me.fireViewEvent('evtRecordSaveComplete', self, operaion);
                }
            }
        });
    },

    onReset: function() {
        var me = this;
        var form = me.getView().getForm();
        form.reset();
    }
});