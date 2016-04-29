Ext.define('TrainProjectServer.store.Componys', {
    extend: 'Ext.data.Store',
    alias: 'store.componys',

    requires: [
        'TrainProjectServer.model.Compony'
    ],

    model: 'TrainProjectServer.model.Compony',
    // autoLoad: true,
    proxy: {
        type: 'direct',
        extraParams: {
            queryType: _myConstants.GETALL
        },
        directFn: 'ComponyAction.readRecord',
        reader: {
            type: 'json',
            rootProperty: 'contents'
        }
    }
});