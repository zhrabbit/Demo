Ext.define('TrainProjectServer.view.tree.NaviTreeModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.tree-navitree',

    requires: [
        'TrainProjectServer.model.NaviTree'
    ],

    stores: {
        functionTree: {
            type: 'tree',
            model: 'TrainProjectServer.model.NaviTree',
            root: {
                text: '所属区域',
                expanded: true
            },
            proxy: {
                type: 'direct',
                directFn: 'NaviTreeAction.getBrowseTree',
                reader: {
                    type: 'json',
                    typeProperty: 'modelType',
                    transform: function(data) {
                        return data;
                    }
                },
                paramOrder: ['node']
            }
        }
    }
});