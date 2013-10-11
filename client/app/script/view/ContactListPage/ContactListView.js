App.module('view', function(view, App, Backbone, Marionette, $, _) {

    view.ContactListView = Vmobile.JqmListView.extend({
        itemView: view.ContactListItemView,

        onRender: function() {
            Vmobile.JqmListView.prototype.onRender.apply(this, JsUtil.slice(arguments));
            // todo: everytime we don't have to doFetch(), fix this.
            this.collection.doFetch(); // Fetch the collection after the 'ul' is rendered
        }

    })
});