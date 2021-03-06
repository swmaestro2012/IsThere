Ext.define('IsThere.view.ResultView', {
    extend:'Ext.view.View',
    alias:'widget.resultView',

    requires:[
        'IsThere.view.CartList',
        /*'Ext.grid.plugin.DragDrop'*/
        'Ext.ux.DataView.Draggable'
    ],

    mixins:{
        draggable:'Ext.ux.DataView.Draggable'
    },
    store:'ResultStore',

    autoScroll:true,
    tpl:[
        '<tpl for=".">',
        '   <div class="thumb-wrap" id="{appNo:stripTags}">',
        '       <div class="thumb"><img src="{url}" title="{appNo:htmlEncode}"></div>',
        '       <span class="app-no">{appNo:htmlEncode}</span>',
        '   </div>',
        '</tpl>'
    ],
    multiSelect:true,
    height:310,
    trackOver:true,
    overItemCls:'x-item-over',
    itemSelector:'div.thumb-wrap',
    emptyText:'No images to display',

    initComponent:function () {
        var me = this;

        me.mixins.draggable.init(me, {
            ddConfig:{
                ddGroup:'result-ddgroup',
                enableDrag:true,
                enableDrop:false
            }
        });
        me.callParent(arguments);
    }
});