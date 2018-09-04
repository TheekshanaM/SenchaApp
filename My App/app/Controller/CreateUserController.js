Ext.define('MyApp.controller.CreateUserController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.CreateUser',

    onSaveTap: function(Name) {

        //var singleUser = this.lookupReference('salary').getValue();
        /*var singleUser = Ext.create(MyApp.model.Personnel);
        
        singleUser.name= this.lookupReference('name').getValue();
        singleUser.email= this.lookupReference('email').getValue();
        singleUser.phone= this.lookupReference('phone').getValue();*/
        var singleUser ={name: this.lookupReference('name').getValue(),
                          email: this.lookupReference('email').getValue(),
                          phone: this.lookupReference('phone').getValue()
                        };
        var user = Ext.create('MyApp.model.Personnel', singleUser);
        //var user = Ext.create('MyApp.model.Personnel', { name: this.lookupReference('salary')+'', email: 'ed@sencha.com', phone:'235'});


        user.save();
        
        Ext.toast('User Created', 2000);
        //Ext.Viewport.setActiveItem(Ext.create('MyApp.view.list.MainList'));
        var a = Ext.ComponentQuery.query('#userTab')[0];
        a.getStore().load();
        console.log(a);
    },

    onResetTap: function() {
        this.getView().reset();
    }
});