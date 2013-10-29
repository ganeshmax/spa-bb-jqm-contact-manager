/**
 * Extend Marionette.Renderer.render() method to render the data to a given template function.
 * In this case, the extension exists because, i am using pre-compiled JST template functions and sending
 * it to the client as a single JS file
 * @param template
 * @param data
 * @return {*}
 */
Backbone.Marionette.Renderer.render = function(template, data) {
    return template(data);
};

/**
 * Region.show() is used to show any BB view inside a Region. With this base assumption, it closes an existing view
 * displayed in that region before showing a new view. This prevents memory leaks and zombie issues.
 *
 * While that is excellent design pattern, it does not work for a jqm page in a BB app, primarily because a jqm page
 * is just not replaced with another jqm page. It is replaced with a transition animation. For the transition
 * animation to happen, we will need both the prevPage and the nextPage to be in the DOM and the prevPage cannot
 * be closed until the nextPage is transitioned and shown.
 *
 * For this to work, we will have to modify Marionette Region's show(), open() and close() methods. But that is not the
 * correct solution because, even within a jqm page, there could be elements that may need the Region's show() and
 * close() feature. So, modifying it is not an option.
 *
 * So, i chose to create a new set of methods - openPage(), closePage() and showPage() as an additional set of methods
 * to add jqm page transition into picture. The following is an implementation of the same
 */
_.extend(Marionette.Region.prototype, {

    /**
     * showPage() replaces show() as a mechanism to show jqm pages inside a Region. This does not close() the existing
     * page before show()ing the new page. Instead it show()s the new page with transition and attaches event handlers
     * on "pagehide" to close() the previous page and on "pagechange" to show the next page.
     *
     * It handles triggerMethod correctly so that the onShow and onClose will still be called in order. For instance,
     * the onShow() will be called on the region and next view after the onClose() is called on the region and previous
     * view.
     *
     * @param nextPage - the page to transition into using jqm $.mobile.changePage()
     * @param options - transition and other options that can be directly given to $.mobile.changePage().
     *                  supplied by the caller.
     * @return promise - Will be resolved after the page transition is complete and open and close happened as per
     *                   plan.
     */
    showPage: function(nextPage, options) {

        // TODO: Extend this to resolve() only when both closePage and openPage succeeded. Now using only openPage
        // TODO: Proper error handling so that reject() can be applied
        var openPageDeferred = $.Deferred();

        // If page is not a PageView object fail fast with error
        if(!(nextPage.isPage && nextPage.isPage())) {
            throw new Error("Z: cannot showPage() as page is not a PageView object");
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
            this.openPage(nextPage, options, openPageDeferred);
        }

        return openPageDeferred.promise();

    },

    /**
     * NOTE: Internal method. Do not extend or replace without knowing the flow of events.
     * Open a new page with jqm options
     *
     * @param nextPage
     * @param options
     * @param openPageDeferred
     */
    openPage: function(nextPage, options, openPageDeferred) {

        var $nextPageEl = nextPage.$el;
        var self = this;

        // Append the page's element to the DOM first
        this.$el.append($nextPageEl);

        // "pagechange" is the correct event compared to "pageshow" because, during "pageshow", the persistent
        // header/footer that was removed from the page for transition animation is not yet added into the page
        // Since we are attaching the event on document everytime openPage() is called, it will result in multiple
        // event handlers getting attached. So, attach the handler just once using one() technqiue.
        // Alternatively, we could attach it only once and leave it at it, but, i guess, this will suffice for now

        // TODO: Check the data argument to verify if we are working with the correct page
        // TODO: Check which element pagechange fires on to clean this event handler up
        $(document).one(jqmExt.EVENT.PAGE_CHANGE, function(event, data) {
            console.log("MarionetteExt: After changePage() is finished and the new page is displayed");

            self.currentView = nextPage;

            // Calls onShow() on the region and view
            Marionette.triggerMethod.call(self, "show", nextPage);
            Marionette.triggerMethod.call(nextPage, "show");

            openPageDeferred.resolve();
        });

        // TODO: Verify. Sometimes the page change is not happening properly without giving a tick to the browser.
//        setTimeout(function() {
            console.log("Before $.mobile.changePage()");
            $.mobile.changePage($nextPageEl, options);
            console.log("After $.mobile.changePage()");
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

            // if there is no current page, close() will never get called,
            // if there was a current page, close() will be called on pagehide
            // This method calls close() on region, which in turn triggers 'close' on region only
            // The onClose() on the view would have been called when currentPage.close() was called earlier
            Marionette.triggerMethod.call(self, "close");
        });
    }

});








