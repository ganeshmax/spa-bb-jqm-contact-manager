/**
 * Base class jqm ListView. Create a subclass or instantiate this class directly to use as jqm ListView implementation
 * Extends Marionette's CollectionView to offer auto-population of listview's list items based on BB collection
 * and models. Also, depends on Marionette's CollectionView for auto updating the listview when new models are
 * added into the collection
 *
 * @type {*|Object|Object}
 */
Z.jqm.ListView  = Z.CollectionView.extend({
    tagName: 'ul',
    attributes: {
        'data-role': 'listview',
        'data-inset': 'true'
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
        // this.$el.listview('refresh');
    }
});