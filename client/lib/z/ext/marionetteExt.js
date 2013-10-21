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
     * @param nextPage - the page to transition into using jqm $.mobile.changePage()
     * @param options - transition and other options that can be directly given to $.mobile.changePage().
     *                  supplied by the caller.
     */
    showPage: function(nextPage, options) {

        // If page is not a page object fail fast with error
        if(!(nextPage.isPage && nextPage.isPage())) {
            throw new Error("z: cannot showPage() as page is not a page object");
        }

        this.ensureEl();
        var isPageClosed = nextPage.isClosed || _.isUndefined(nextPage.$el);
        var isDifferentPage = nextPage !== this.currentView;

        // This does not close() immediately, instead it defers to close after pagehide
        if (isDifferentPage) {
            this.closePage(this.currentView);
        }

        nextPage.render();

        if (isDifferentPage || isPageClosed) {
            this.openPage(nextPage, options);
        }

    },

    /**
     * NOTE: Internal method. Do not extend or replace without knowing the flow of events.
     * Open a new page with jqm options
     *
     * @param nextPage
     * @param options
     */
    openPage: function(nextPage, options) {

        var $nextPageEl = nextPage.$el;
        var self = this;

        // Append the page's element to the DOM first
        this.$el.append($nextPageEl);

        // "pagechange" is the correct event compared to "pageshow" because, during "pageshow", the persistent
        // header/footer that was removed from the page for transition animation is not yet added into the page
        // TODO: Check the data argument to verify if we are working with the correct page
        // TODO: Check which element pagechange fires on to clean this event handler up
        $(document).on(jqmExt.EVENT.PAGE_CHANGE, function(event, data) {
            console.log("MarionetteExt: After changePage() is finished and the new page is displayed");

            if(nextPage.isScrollerEnabled && nextPage.isScrollerEnabled() && nextPage.openScroller) {
                console.log("OPEN PAGE: Scroller Enabled and openScroller is available");
                nextPage.openScroller();
            }

            self.currentView = nextPage;

            // Calls onShow() on the region and view
            Marionette.triggerMethod.call(self, "show", nextPage);
            Marionette.triggerMethod.call(nextPage, "show");
        });

        // TODO: Verify. Sometimes the page change is not happening properly without giving a tick to the browser.
//        setTimeout(function() {
            console.log("before changePage");
            $.mobile.changePage($nextPageEl, options);
            console.log("after changePage");
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

        var $currentPageEl = currentPage.$el;
        var self = this;

        // TODO: Check if the event should be attached to document? etc.
        $currentPageEl.on(jqmExt.EVENT.PAGE_HIDE, function(event) {
            console.log("Closing Page with ID: " + this.id + " after pagehide");

            // call 'close' or 'remove', depending on which is found
            if (currentPage.close) { currentPage.close(); }
            else if (currentPage.remove) { currentPage.remove(); }

            if(currentPage.isScrollerEnabled && currentPage.isScrollerEnabled() && currentPage.closeScroller) {
                console.log("CLOSE PAGE: Scroller Enabled and closeScroller is available");
                currentPage.closeScroller();
            }

            // if there is no current page, close() will never get called,
            // if there was a current page, close() will be called on pagehide
            // This method calls close() on region, which in turn triggers 'close' on region only
            // The onClose() on the view would have been called when currentPage.close() was called earlier
            Marionette.triggerMethod.call(self, "close");
        });
    }

});








