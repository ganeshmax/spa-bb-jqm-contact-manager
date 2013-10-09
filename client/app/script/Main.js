var App = new Backbone.Marionette.Application({

    // Custom events triggered and listened to by this app
    EventType: {
        DATE_CHANGED: "expense:dateChanged"
    },

    onStart: function() {
        // Start with creating a new complete Page1View.
        App.body.show(new App.View.Page1View());
    }
});

$(function() {
    App.addRegions({
        body: "#body"
    });
    App.start();
});



