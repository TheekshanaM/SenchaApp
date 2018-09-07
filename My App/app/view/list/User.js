
Ext.define('MyApp.view.list.User', {
    extend: 'Ext.grid.Grid',
    //view: 'Ext.NavigationView',
    xtype: 'mainlist',
    
    id: 'userTab',
    
    /*requires: [
        'MyApp.store.Personnel'
    ],*/
    
    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [/*{ 
        text: 'Id',
        dataIndex: 'id',
        width: 100,
        cell: {
            userCls: 'bold'
        }
    },*/{ 
        text: 'Name',
        dataIndex: 'name',
        width: 100,
        cell: {
            userCls: 'bold'
        }
    }, {
        text: 'Email',
        dataIndex: 'email',
        width: 230 
    }, { 
        text: 'Phone',
        dataIndex: 'phone',
        width: 150 
    },{
        width: 70,

        cell: {
            tools: {
                
                decline: {
                    //label: 'Delete',
                    iconCls: 'x-fa fa-ban red',
                    handler: 'Delete',
                    weight: 1
                }
            }
        }
    }],

    signTpl: '<span style="' +
            'color:{value:sign("${red}", "${green}")}"' +
        '>{text}</span>',
    
    listeners: {
        
        select: 'onItemSelected'
        
    }
});

