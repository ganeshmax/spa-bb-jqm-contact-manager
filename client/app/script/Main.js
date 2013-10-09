var App = new Backbone.Marionette.Application({

    // Custom events triggered and listened to by this app
    EventType: {
        DATE_CHANGED: "expense:dateChanged" // Dummy right now, just as an example
    },

    onStart: function() {
        // Start with creating a new complete Page1View.
        App.body.show(new App.view.ContactListPageView());
    }
});

$(function() {
    App.addRegions({
        body: "#body"
    });
    App.start();
});



