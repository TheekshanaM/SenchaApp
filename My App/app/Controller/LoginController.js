
Ext.define('MyApp.controller.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLogin: function () {
        
        var form = this.getView();
        
        if (form.validate()) {
            //Ext.Viewport.setActiveItem(Ext.create('Main'));
            //Ext.Msg.alert('Login Success', 'You have been logged in!');
            Ext.toast('Login success', 2000);
            Ext.Viewport.setActiveItem(Ext.create('MyApp.view.list.MainList'));
        } else {
            
            Ext.Msg.alert('Login Failure', 'The username/password provided is invalid.');
        }
    }
});