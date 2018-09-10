Ext.define('MyApp.controller.EditeUserController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.EditUser',

    //requires: ['MyApp.controller.MainController'],

    onSaveTap: function(Name) {
        var id  = this.lookupReference('id').getValue(),
                          name= this.lookupReference('name').getValue(),
                          email= this.lookupReference('email').getValue(),
                          phone= this.lookupReference('phone').getValue();

        var singleUser ={id: id,
                          name: name,
                          email: email,
                          phone: phone
                        };
        var user = Ext.create('MyApp.model.Personnel',{id: id});
        //var user = Ext.create('MyApp.model.Personnel', { name: this.lookupReference('salary')+'', email: 'ed@sencha.com', phone:'235'});

                        //console.log(name);
        user.save(
            {
                success: function(record, operation)  {
                    record.set(singleUser);
            
                    record.save(); //PUT /users/123
                }
            }
        );
        Ext.toast('Updated', 2000);
        var task = new Ext.util.DelayedTask(function(){
            //your loading panel2 with heavy data goes here
            var a = Ext.ComponentQuery.query('#userTab')[0];
            a.getStore().load();
        });
        task.delay(500);
        
        var view = MyApp.app.globals.view;
        //view.getNavigationBar().hide();
        //var domId = Ext.ComponentQuery.query('#userTab')[0];
        
        
        view.pop();
        //var b = Ext.ComponentQuery.query('#mainList')[0];
        //b.getView();
        //console.log(b);
    },

    cansel: function() {
        var view = MyApp.app.globals.view;
        view.pop();

        
    }
});