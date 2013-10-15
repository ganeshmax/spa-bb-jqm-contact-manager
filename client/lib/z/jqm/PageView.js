Z.jqm.PageView = Z.Layout.extend({
    tagName: 'div',
    id: null, // Give every page an id in initialize(). User may override while instantiating
    attributes: {
        'data-role': 'page'
    },

    type: 'page', // Not using this right now. May use it instead of isPage() or in combination later.

    // Any page will have header, content and footer regions. This can be used by sub-classes to show()
    regions: {
        content: "div[data-role=content]>div.content"
    },


    /**
     * Determines whether a given View is a PageView or not.
     * @return {Boolean}
     */
    isPage: function() {
        return true;
    },

    /**
     * After finishing the bookkeeping work of calling the super class constructor(), setup a listener
     * on this View's jqm.pagehide event. During jqm.pagehide, close() the view. This is necessary because, close() that
     * is called by Region.show() has been replaced with a no-op below. That is required to have the transition
     * effect from page 1 to page 2.
     */
    constructor: function() {
        this.id = "page-id-" + new Date().getTime();
        Marionette.Layout.prototype.constructor.apply(this, Z.util.slice(arguments));
    },

    render: function(){
        var result = Marionette.Layout.prototype.render.apply(this, Z.util.slice(arguments));
        return result;
    }

});

