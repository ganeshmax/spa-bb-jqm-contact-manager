Vmobile.JqmListView  = Marionette.CollectionView.extend({
    tagName: 'ul',
    attributes: {
        'data-role': 'listview'
    },

    // A flag to indicate that the listview has finished rendering to the el
    // TODO: Use to it properly 'refresh' the listview without errors
    rendered: false,

    onRender: function() {
        this.rendered = true;
    },

    /**
     * TODO: Use the rendered flag to configure the refresh at the right time
     * @param itemView
     */
    onAfterItemAdded: function(itemView) {
        this.$el.listview('refresh');
    }
});