

Ext.define('MyApp.controller.MainController', {
    extend: 'Ext.app.ViewController',
    requires: [
        'MyApp.view.list.User'
    ],
    alias: 'controller.main-list',

    onItemSelected: function (sender, record) {
        
        
        
        //Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
        Ext.Viewport.setActiveItem(Ext.create('MyApp.view.list.EditUser'));
        //Ext.ComponentQuery.query('#uId')[0].setValue(record[0].getData().id);
        Ext.ComponentQuery.query('#uName')[0].setValue(record[0].getData().name);
        Ext.ComponentQuery.query('#uEmail')[0].setValue(record[0].getData().email);
        Ext.ComponentQuery.query('#uPhone')[0].setValue(record[0].getData().phone);
        //console.log(b);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            var a = Ext.ComponentQuery.query('#userTab')[0];
            console.log(a);
            //var grid = this.getGrid();
            //var s = grid.getSelectionModel().getSelections()[0];
            Ext.Viewport.setActiveItem(Ext.create('MyApp.view.list.EditUser'));
        }
    }
});