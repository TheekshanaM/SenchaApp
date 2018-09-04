/*Ext.define('MyApp.view.list.CreateUser', {
    extend: 'Ext.grid.Grid',
    xtype: 'createUser',

    requires: [
        'MyApp.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

});*/

/**
 * Demonstrates a tabbed form panel. This uses a tab panel with 3 tabs - Basic, Sliders and Toolbars - each of which is
 * defined below.
 */
Ext.define('MyApp.view.list.CreateUser', {
    extend: 'Ext.form.Panel',
    xtype: 'createUser',
    controller: 'CreateUser',

    requires: [
        'Ext.field.*',
        'Ext.form.FieldSet',
        'MyApp.store.Personnel'
        /*'KitchenSink.view.forms.FormPanelController',
        'KitchenSink.store.States'*/
    ],
    store: {
        type: 'personnel'
    },
    
    title: 'Create User',
    id: 'usrForm',

    height: 500,
    bodyPadding: 20,
    scrollable: 'y',
    width: 320,
    autoSize: true,
    
    buttons: [{
        text: 'Save',
        //bind: '{disabled ? "Enable fields" : "Disable fields"}',
        handler: 'onSaveTap'
    }, {
        text: 'Reset',
        handler: 'onResetTap'
    }],

    /*bind: {
        disabled: '{disabled}' // Will cascade down to all fields.
    },*/
    items: [{
        xtype: 'fieldset',
        reference: 'fieldset1',
        title: 'Personal Info',
        instructions: 'Please enter the information above.',
        items: [{
            reference: 'name',
            xtype: 'textfield',
            name: 'name',
            label: 'Name',
            placeholder: 'Tom Roy',
            autoCapitalize: true,
            required: true,
            clearable: true
        }, {
            label: 'Email',
            reference: 'email',
            xtype: 'textfield',
            minValue: 0,
            decimals: 2,
            required: true
        }, {
            label: 'Phone',
            reference: 'phone',
            xtype: 'textfield',
            minValue: 0,
            decimals: 2,
            required: true
        }]
    }]
});