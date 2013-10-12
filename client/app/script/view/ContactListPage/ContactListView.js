App.module('view', function(view, App, Backbone, Marionette, $, _) {

    view.ContactListView = Z.ListView.extend({
        itemView: view.ContactListItemView,

        onRender: function() {
            Z.ListView.prototype.onRender.apply(this, JsUtil.slice(arguments));
            // todo: everytime we don't have to doFetch(), fix this.
            this.collection.doFetch(); // Fetch the collection after the 'ul' is rendered
        }

    })
});