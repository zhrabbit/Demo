/**  
 * 提取了一个停靠组件的类，方便维护 
 */
Ext.define('Demo.view.common.GridToolbars', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.common-gridtoolbars',
    initComponent: function() {
        var me = this;
        me.items = [{
            text: '新增',
            glyph: 0xf016
        }, {
            text: '修改',
            glyph: 0xf044
        }, {
            text: '删除',
            glyph: 0xf014
        }, {
            text: '查看',
            glyph: 0xf022
        }];
        me.callParent();
    }
});