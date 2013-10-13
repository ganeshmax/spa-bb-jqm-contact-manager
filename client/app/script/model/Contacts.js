/**
 * Represents a collection of Contact objects.
 * @type {*}
 */
App.model.Contacts = Backbone.Collection.extend({

    model: App.model.Contact,

    url: function() {
        return 'contact';
    },

    doFetch: function() {
        this.fetch({
            success: function(collection, response) {
                console.log("Success while fetching Contacts");
            },
            error: function(collection, response) {
                console.log("Error while fetching Contacts");
            }
        });
    }
});
