
/*Ext.define('MyApp.view.User.UserVIewModel',{
    extend: 'Ext.panel.Panel',

    requires: [
        'MyApp.view.User.UserVIewModelController',
        'MyApp.view.User.UserVIewModelModel'
    ],

    controller: 'user-userviewmodel',
    viewModel: {
        type: 'user-userviewmodel'
    },

    html: 'Hello, World!!'
});

Ext.define('MyApp.view.User.UserVIewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.user-userviewmodel',
    stores: {
        UserListStore: {
            model: 'MyApp.model.User',
            autoLoad: true,
            autoSync: true,
            proxy:
            {
                type: 'rest',
                reader:
                {
                    rootProperty: 'data',
                    type: 'json'
                },
                url: 'http://localhost:25231/api/User/',
                writer: {
                    type: 'json',
                    dateFormat: 'd/m/Y',
                    writeAllFields: true
                }
            }
        }

    }
});*/