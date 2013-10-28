
var App = new Z.Application({

    onStart: function() {
        // Load all contacts to begin with
        App.model.contacts = new App.model.Contacts();
//        App.model.contacts.fetch({reset: true}).done(function(data) {

            // Start with creating a new complete Page1View.
            App.body.showPage(new App.view.ContactListPageView({
                collection: App.model.contacts
            }));

//        });
    },

    startWhenDeviceReady: function() {
        App.addRegions({
            body: "#body"
        });
        App.start();
    }
});

_.extend(App, {
    view: {},
    model: {},
    router: {},
    util: {},
    events: {
        DATE_CHANGED: 'contact:dateChanged'
    }
});

$(function() {
    // If Cordova is available on page, then we should use deviceready event, otherwise, we should not
    if(window.device) {
        console.log("Cordova in action: onDeviceReady()");
        document.addEventListener("deviceready", App.startWhenDeviceReady, false);
    } else {
        console.log("Cordova not present: onDocumentReady()");
        App.startWhenDeviceReady();
    }
});



