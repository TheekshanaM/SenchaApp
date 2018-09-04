/*Ext.define('MyApp.model.User', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'UserId', type: 'int' },
        { name: 'UserName', type: 'String' },
        { name: 'Password', type: 'String' }

    ]
});
*/

Ext.define('User', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name', 'email'],

    proxy: {
        type: 'rest',
        url : '/users'
    }
});