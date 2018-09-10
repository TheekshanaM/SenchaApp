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
        var task = new Ext.util.DelayedTask(function(){
            //your loading panel2 with heavy data goes here
            var a = Ext.ComponentQuery.query('#userTab')[0];
            a.getStore().load();
        });
        task.delay(1000);
        this.getView().reset();

        var tabpanel = Ext.ComponentQuery.query('#mainList')[0]; 
        tabpanel.setActiveItem(0);
        
    },

    onResetTap: function() {
        this.getView().reset();
    }
});