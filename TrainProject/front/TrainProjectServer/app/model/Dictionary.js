Ext.define('TrainProjectServer.model.Dictionary', {
    extend: 'Ext.data.Model',

    //数据字典
    fields: [{
        name: 'code',
        type: 'string'
    }, {
        name: 'remark',
        type: 'string'
    }, {
        name: 'parentUuid',
        type: 'string'
    }, {
        name: 'dictionaryName',
        type: 'string'
    }, {
        name: 'dictionaryType',
        type: 'string'
    }]
});