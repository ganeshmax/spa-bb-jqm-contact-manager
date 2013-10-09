Vmobile.PageView = Marionette.Layout.extend({
    tagName: 'div',
    attributes: {
        'data-role': 'page'
    },

    id: "page-id-" + new Date().getTime(), // Give every page an id. User may override while instantiating
    type: 'page', // Not using this right now. May use it instead of isPage() or in combination later.

    // Any page will have header, content and footer regions. This can be used by sub-classes to show()
    regions: {
//        header: "div[data-role=header]",
        content: "div[data-role=content]"
//        footer: "div[data-role=footer]"
    },

    /**
     * Determines whether a given View is a PageView or not.
     * @return {Boolean}
     */
    isPage: function() {
        return true;
    },

    /**
     * After finishing the bookkeeping work of calling the super class initialize(), setup a listener
     * on this View's pagehide event. During pagehide, close() the view. This is necessary because, close() that
     * is called by Region.show() has been replaced with a no-op below. That is required to have the transition
     * effect from page 1 to page 2.
     */
    initialize: function() {
        Marionette.ItemView.prototype.initialize.apply(this, Array.prototype.slice.call(arguments));

        var self = this;
        this.$el.on('pagehide', function(event) {
            console.log("Closing View with ID: " + this.id + " after pagehide");
            Marionette.ItemView.prototype.close.apply(self);
        });
    },

    /**
     * If this close() method is called, that means Region.show() has called it before showing the next view.
     * Since this is a PageView, Region.open() will transition the existing view out before calling close
     * In this.initialize() we have already setup to View.close() when the page hides. So, this close() essentially
     * masks the close() method until the page is ready to be close()d
     */
    close: function() {
        console.log("NOT Closing View with ID Yet: " + this.id + ". Page is yet to hide and thus removed.");
    }
});