Ext.define('MyApp.controller.EditeUserController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.EditUser',

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
        //Ext.Viewport.setActiveItem(Ext.create('MyApp.view.list.MainList'));
        /*Ext.toast('User Created', 2000);
        //Ext.Viewport.setActiveItem(Ext.create('MyApp.view.list.MainList'));
        var a = Ext.ComponentQuery.query('#userTab')[0];
        a.getStore().load();
        console.log(a);
        var b = Ext.ComponentQuery.query('#mainList')[0];
        var currentTab = b.getActiveTab();

        tabPanel.setActiveTab(0);
        //tabPanel.setActiveTab(1);
        //tabPanel.setActiveTab(2);

        tabPanel.setActiveTab(currentTab);
        console.log(b);*/
    },

    cansel: function() {
        Ext.Viewport.setActiveItem(Ext.create('MyApp.view.list.MainList'));
    }
});