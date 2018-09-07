

Ext.define('MyApp.controller.MainController', {
    extend: 'Ext.app.ViewController',
    requires: [
        'MyApp.view.list.User'
    ],
    alias: 'controller.main-list',

    /*onApprove: function (grid, info) {
        //Ext.Msg.alert('Approve', info.record.get('name'));
        console.log(info.record.getData().id);
        Ext.Viewport.setActiveItem(Ext.create('MyApp.view.list.EditUser'));
        Ext.ComponentQuery.query('#uId')[0].setValue(info.record.getData().id);
        /*Ext.ComponentQuery.query('#uName')[0].setValue(record[0].getData().name);
        Ext.ComponentQuery.query('#uEmail')[0].setValue(record[0].getData().email);
        Ext.ComponentQuery.query('#uPhone')[0].setValue(record[0].getData().phone);
},*/

    Delete: function (grid, info) {
        var id = info.record.getData().id;
        var user = Ext.create('MyApp.model.Personnel',{id: id});
        user.erase();

        var task = new Ext.util.DelayedTask(function(){
            //your loading panel2 with heavy data goes here
            var a = Ext.ComponentQuery.query('#userTab')[0];
            a.getStore().load();
        });
        task.delay(200);
        Ext.Anim.run(this, 'fade', {
            out: true,
            autoClear: true
        });
        
        /*var a = Ext.ComponentQuery.query('#userTab')[0];
        a.getStore().load();*/
    },

    onItemSelected: function (sender, record) {
        
        var view = Ext.create('Ext.NavigationView', {
            fullscreen: true,
            //items: [{}]
        });
        view.getNavigationBar().hide();
        view.push(Ext.create('MyApp.view.list.EditUser'));
        
        //Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
        //Ext.Viewport.setActiveItem(Ext.create('MyApp.view.list.EditUser'));
        Ext.ComponentQuery.query('#uId')[0].setValue(record[0].getData().id);
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