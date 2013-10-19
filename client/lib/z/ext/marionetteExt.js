Backbone.Marionette.Renderer.render = function(template, data) {
    return template(data);
};

/**
 * Region.show() is used to show any BB view inside a Region. With this base assumption, it closes an existing view
 * displayed in that region before showing the new view.
 * But, this scenario will not work for a jqm app because if we show() a new page in a Region, we expect the
 * transition animation to happen before the existing view is closed. This extension to marionette is to take this
 * new assumption into account.
 */
_.extend(Marionette.Region.prototype, {

    /**
     * showPage() replaces show() as a mechanism to show jqm pages inside a Region. This does not close() the existing
     * page before show()ing the new page. Instead it show()s the new page with transition and attaches an event handler
     * on pagehide to close() the previous page.
     *
     * @param page - the page to transition into using jqm $.mobile.changePage()
     * @param options - transition and other options that can be directly given to $.mobile.changePage().
     *                  supplied by the caller.
     */
    showPage: function(page, options) {

        // If page is not a page object fail fast with error
        if(!(page.isPage && page.isPage())) {
            throw new Error("z: cannot showPage() as page is not a page object");
        }

        this.ensureEl();
        var isPageClosed = page.isClosed || _.isUndefined(page.$el);
        var isDifferentPage = page !== this.currentView;

        // This does not close() immediately, instead it defers to close after pagehide
        if (isDifferentPage) {
            this.closePage(this.currentView);
        }

        page.render();

        if (isDifferentPage || isPageClosed) {
            this.openPage(page.$el, options);
        }
        this.currentView = page;

        Marionette.triggerMethod.call(this, "show", page);
        Marionette.triggerMethod.call(page, "show");
    },

    /**
     * NOTE: Internal method. Do not extend or replace without knowing the flow of events.
     * Open a new page with jqm options
     *
     * @param $nextPageEl
     * @param options
     */
    openPage: function($nextPageEl, options) {
        // Append the page's element to the DOM first
        this.$el.append($nextPageEl);

        // TODO: Verify. Sometimes the page change is not happening properly without giving a tick to the browser.
        // Will be enabling and disabling timeout back and forth while testing this.
//        setTimeout(function() {
            $.mobile.changePage($nextPageEl, options);
//        }, 0);
    },

    /**
     * NOTE: Internal method. Do not extend or replace without knowing the flow of events.
     * Example: if you call closePage() on a Region, it will not close the view properly. This is used only while
     * showPage() is called to closePage() and openPage() in proper sequence to effect transition.
     * If you want to close a view in the region, just call Region.close() like you would normally.
     * @param currentPage
     */
    closePage: function(currentPage) {
        if (!currentPage || currentPage.isClosed){ return; }

        var self = this;
        currentPage.$el.on(jqmExt.event.PAGE_HIDE, function(event) {
            console.log("Closing Page with ID: " + this.id + " after pagehide");

            // call 'close' or 'remove', depending on which is found
            if (currentPage.close) { currentPage.close(); }
            else if (currentPage.remove) { currentPage.remove(); }


            // if there is no current page, close() will never get called,
            // if there was a current page, close() will be called on pagehide
            // This method calls close() on region, which in turn triggers 'close' on region and view
            Marionette.triggerMethod.call(this, "close");
        });
    }

});








