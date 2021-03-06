Ext.define('IsThere.view.SearchPanel', {
    extend:'Ext.panel.Panel',
    alias:'widget.searchPanel',

    requires:[
        /*'IsThere.view.ResultList'*/   //grid to view
        'IsThere.view.ResultView'
    ],

    layout:'fit',
    border:false,
    title:'Search',

    initComponent:function () {
        var me = this;

        Ext.applyIf(me, {
            dockedItems:[
                {
                    //xtype:'toolbar',
                    xtype:'form',
                    dock:'top',
                    border:false,
                    items:[
                        {
                            xtype:'toolbar',
                            dock:'top',
                            items:[
                                {
                                    xtype:'combo',
                                    layout:'vbox',
                                    itemId:'conditionCombo',
                                    width:180,
                                    labelWidth:50,
                                    store:'SearchOptStore',
                                    fieldLabel:'Option :',
                                    displayField:'name',
                                    emptyText:'- 선택 -',
                                    valueField:'id',
                                    typeAhead:true,
                                    editable:false,
                                    allowBlank:false,
                                    margin:'0 5 0 0',
                                    rootVisible:false,
                                    useArrows:true,
                                    selectOnFocus:true,
                                    queryMode:'local'
                                },
                                {
                                    xtype:'textfield',
                                    layout:'vbox',
                                    itemId:'keywordTextfield',
                                    width:250
                                },
                                {
                                    xtype:'button',
                                    layout:'vbox',
                                    itemId:'searchButton',
                                    text:'Search',
                                    iconCls:'search'
                                },
                                {
                                    xtype:'filefield',
                                    layout:'vbox',
                                    itemId:'uploadButton',
                                    name:'uploadPath',
                                    buttonOnly:true,
                                    hideLabel:true,
                                    buttonText:'Upload',
                                    buttonConfig:{
                                        iconCls:'upload'
                                    }
                                }
                            ]
                        }
                    ]
                }
            ],
            items:[
                {
                    xtype:'panel',
                    id:'results-view',
                    items:[
                        {
                            //xtype:'resultList'
                            xtype:'resultView'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});