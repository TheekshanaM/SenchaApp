

Ext.define('MyApp.controller.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main-list',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            
            Ext.Viewport.setActiveItem(Ext.create('MyApp.view.Login'));
        }
    }
});