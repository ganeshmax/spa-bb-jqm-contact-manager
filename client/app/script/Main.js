var App = new Backbone.Marionette.Application({

    // Custom events triggered and listened to by this app
    EventType: {
        DATE_CHANGED: "expense:dateChanged" // Dummy right now, just as an example
    },

    onStart: function() {

        // Create a singleton Contacts Collection and load it async
        App.model.contacts = new App.model.Contacts();
        App.model.contacts.doFetch();

        // Start with creating a new complete Page1View.
        App.body.show(new App.view.ContactListPage());
    }
});

$(function() {
    App.addRegions({
        body: "#body"
    });
    App.start();
});



