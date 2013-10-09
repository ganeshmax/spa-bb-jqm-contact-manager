App.module('view', function(view, App, Backbone, Marionette, $, _) {

    view.ContactListView = Marionette.CollectionView.extend({
        itemView: view.ContactListItemView,

        tagName: 'ul',
        attributes: {
            'data-role': 'listview',
//            'data-inset': 'true'
        },

        onAfterItemAdded: function(itemView) {
            this.$el.listview('refresh');
        }

    })
});