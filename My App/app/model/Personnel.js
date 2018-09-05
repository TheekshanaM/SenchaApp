Ext.define('MyApp.model.Personnel', {
    extend: 'Ext.data.Model',
    //alias: 'model.Personnel',

    fields: [
        'id','name', 'email', 'phone'
    ],

    proxy: {
        method: 'POST',
        type: 'rest',
        url : 'http://localhost:25231/api/Personnel/'
    }
});
