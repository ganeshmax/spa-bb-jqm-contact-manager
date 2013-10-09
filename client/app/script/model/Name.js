App.module('model', function(model, App, Backbone, Marionette, $, _) {

    model.Name = Backbone.Model.extend({
        defaults: {
            first: null,
            last: null
        }
    });
});