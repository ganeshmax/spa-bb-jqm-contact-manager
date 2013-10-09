App.module('model', function(model, App, Backbone, Marionette, $, _) {

    model.Address = Backbone.Model.extend({
        defaults: {
            line1: null,
            line2: null,
            city: null,
            state: null,
            code: null,
            country: null
        }
    });
});