Ext.define('TrainProjectServer.store.Dictionary', {
    extend: 'Ext.data.Store',
    alias: 'store.dictionary',

    requires: [
        'TrainProjectServer.model.Dictionary'
    ],

    model: 'TrainProjectServer.model.Dictionary',
    autoLoad: true,
    proxy: {
        type: 'direct',
        extraParams: {
            queryType: _myConstants.GETALL
        },
        directFn: 'DictionaryAction.readRecord',
        reader: {
            type: 'json',
            rootProperty: 'contents'
        }
    }
});