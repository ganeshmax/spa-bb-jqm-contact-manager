App.module('model', function(model, App, Backbone, Marionette, $, _) {

    model.Contact = Backbone.Model.extend({
        defaults: {
            name: null,
            address: null,
            email: null,
            phone: null
        }
    });
});