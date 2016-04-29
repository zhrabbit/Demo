/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('TrainProjectServer.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main-main',

    onNaviTreeSelected: function(from, selectedNode) {
        var me = this;
        var vModel = me.getViewModel();
        vModel.set('currentContext.theSelectedNode', selectedNode);
        // debugger
    },

    onRecordsBeforeLoad: function(store, operation, eOpts) {
        var me = this;
        var vModel = me.getViewModel();
        var selectedNode = vModel.get('currentContext.theSelectedNode');
        // debugger
        if (selectedNode == null) {
            return;
        }
        var extraParams = {};
        var modelType = selectedNode.get('modelType');
        if (modelType == "tree.area") {
            var area = selectedNode.get('text');
            extraParams[_myConstants.QUERYTYPE] = _myConstants.GETBYAREA;
            extraParams[_myConstants.PARAM_AREA] = area;
        } else if (modelType == "tree.compony") {
            var componyName = selectedNode.get('text');
            extraParams[_myConstants.QUERYTYPE] = _myConstants.GETBYCOMPONYNAME;
            extraParams[_myConstants.PARAM_COMPONYNAME] = componyName;
        }
        var store = vModel.get('theRecords');
        store.proxy.extraParams = extraParams;
    },

    onLoad: function() {
        var me = this;
        var vModel = me.getViewModel();
        var store = vModel.get('theRecords');
    // debugger
        
    }
});