App.module('view', function(view, App, Backbone, Marionette, $, _) {

    view.ContactListView = Z.jqm.ListView.extend({
        itemView: view.ContactListItemView,

        onRender: function() {
            Z.jqm.ListView.prototype.onRender.apply(this, arguments);
            // todo: everytime we don't have to doFetch(), fix this.
            this.collection.doFetch(); // Fetch the collection after the 'ul' is rendered
        }

    })
});