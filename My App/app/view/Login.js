/*
Ext.define('MyApp.view.Login',{
    extend: 'Ext.panel.Panel',

    requires: [
        'MyApp.view.LoginController',
        'MyApp.view.LoginModel'
    ],

    controller: 'login',
    viewModel: {
        type: 'login'
    },

    html: 'Hello, World!!'
});
/**
 * Demonstrates a simple login form.
 */
Ext.define('MyApp.view.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'form-login',
    controller: 'login',
    title: 'Login',

    bodyPadding: 20,
    width: 320,
    autoSize: true,

    items: [{
        xtype: 'textfield',
        allowBlank: false,
        required: true,
        label: 'User ID',
        name: 'user',
        placeholder: 'user id'
    }, {
        xtype: 'passwordfield',
        allowBlank: false,
        required: true,
        label: 'Password',
        name: 'pass',
        placeholder: 'password'
    }, {
        xtype: 'checkbox',
        boxLabel: 'Remember me',
        name: 'remember'
    }],

    buttons: [{
        text: 'Login',
        handler: 'onLogin'
    }]
});