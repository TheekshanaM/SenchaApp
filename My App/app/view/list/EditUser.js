Ext.define('MyApp.view.list.EditUser', {
    extend: 'Ext.form.Panel',
    xtype: 'EditUser',
    controller: 'EditUser',

    requires: [
        'Ext.field.*',
        'Ext.form.FieldSet',
        'MyApp.store.Personnel'
        /*'KitchenSink.view.forms.FormPanelController',
        'KitchenSink.store.States'*/
    ],
    
    
    title: 'Edit User',
    

    height: 500,
    bodyPadding: 20,
    scrollable: 'y',
    width: 320,
    autoSize: true,
    
    buttons: [{
        text: 'Save Changes',
        //bind: '{disabled ? "Enable fields" : "Disable fields"}',
        handler: 'onSaveTap'
    }, {
        text: 'Cansel',
        handler: 'cansel'
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
            reference: 'id',
            xtype: 'hiddenfield',
            //type='hidden',
            id: 'uId',
            name: 'id'
        },{
            reference: 'name',
            xtype: 'textfield',
            id:'uName',
            name: 'name',
            label: 'Name',
            placeholder: 'Tom Roy',
            autoCapitalize: true,
            required: true,
            clearable: true
        }, {
            label: 'Email',
            reference: 'email',
            id: 'uEmail',
            xtype: 'textfield',
            minValue: 0,
            decimals: 2,
            required: true
        }, {
            label: 'Phone',
            reference: 'phone',
            id: 'uPhone',
            xtype: 'textfield',
            minValue: 0,
            decimals: 2,
            required: true
        }]
    }]
});