Ext.define('TrainProjectServer.view.tree.NaviTreeController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tree-navitree',

    onTreeSelected: function(tree, record, item, index, e, eOpts) {
        var me = this;
        me.fireViewEvent('evtTreeSelected', tree, record);
    }
});