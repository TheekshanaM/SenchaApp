/*Ext.define('MyApp.view.User.UserVIewModelModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.user-userviewmodel',
    data: {
        name: 'MyApp'
    }

});

Ext.define('MyApp.view.User.UserVIewModelModel', {
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