
Ext.define('MyApp.view.list.MainList', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    id:'mainList',
    
    requires: [
        'Ext.MessageBox',
        'Ext.layout.Fit'
    ],

    controller: 'main-list',
    //viewModel: 'main',

    defaults: {
        tab: {
            
            iconAlign: 'top'
        }
    },

    tabBarPosition: 'bottom',

    items: [
        // TODO - Replace the content of this view to suit the needs of your application.
        {
            title: 'Home',
            iconCls: 'x-fa fa-home',
            layout: 'fit',
            // The following grid shares a store with the classic version's grid as well!
            
            
            items: [{
                xtype: 'mainlist'
            }]
        },{
            title: 'Users',
            iconCls: 'x-fa fa-user',
            layout: 'fit',
                //html: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            items: [{
                xtype: 'createUser'
            }]
        },{
            title: 'Groups',
            iconCls: 'x-fa fa-users',
            html: 'Tab 1'
            /*bind: {
                html: 'Tab 1'
            }*/
        },{
            title: 'Settings',
            iconCls: 'x-fa fa-cog',
            
            html: 'Tab 2'
            
        }
    ]
});
