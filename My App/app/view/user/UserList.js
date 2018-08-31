/*
Ext.define('MyApp.view.user.UserList',{
    extend: 'Ext.panel.Panel',

    requires: [
        'MyApp.view.user.UserListController',
        'MyApp.view.user.UserListModel'
    ],

    controller: 'user-userlist',
    viewModel: {
        type: 'user-userlist'
    },

    html: 'Hello, World!!'
});

Ext.define('MyApp.view.user.UserList', {
    extend: 'Ext.panel.Panel',
    xtype: 'studentList',

    title: 'Student List',

    controller: 'student-list',
    viewModel: { type: 'userviewmodel' },
    reference:'studentlistgrid',
    selType: 'rowmodel',
    selModel:
    {
        mode: 'SINGLE'
    },
    viewConfig:
    {
        stripeRows: true
    },
    listeners: {
        selectionchange: 'onSelectionChange'
    },
    bind: {
        store: '{UserListStore}'
    },
    initComponent: function () {
        Ext.apply(this,
        {
            plugins: [Ext.create('Ext.grid.plugin.RowEditing',
            {
                clicksToEdit: 2
            })],

            columns: [{
                text: "UserId",
                dataIndex: 'UserId',
                hidden: false,
                width: 35
            },
            {
                text: "UserName",
                flex: 1,
                dataIndex: 'UserName',
                editor:
                {
                    // defaults to textfield if no xtype is supplied
                    allowBlank: false
                }
            }],
            tbar: [{
                text: 'Add Student',
                iconCls: 'fa-plus',
                handler: 'onAddClick'
            }, {
                itemId: 'removeStudent',
                text: 'Remove Student',
                iconCls: 'fa-times',
                reference: 'btnRemoveStudent',
                handler: 'onRemoveClick',
                disabled: true
            }]
        });

        this.callParent(arguments);
    }
});
*/