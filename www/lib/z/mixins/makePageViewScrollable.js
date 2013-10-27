/**
 * Interface & Implementation for any Scroller implementation that will make a JQM content auto scrollable.
 * This implementation uses iScroll for scroller implementation, and consequently requires iscroll.js to be
 * included in the page.
 * Other implementations can choose to use a different scroller, but must implement the methods listed in this
 * implementation if the scroller has to work as a mixin in any Z.jqm.PageView implementation
 * @type {Object}
 */
Z.mixins.makePageViewScrollable = {

    attributes: {
        // TODO: Remove. Was used before to determine if scroller is enabled in a given page.
        // Now, mere presence (inclusion) of this mixin confirms that scrolling is enabled in a page.
//        'data-iscroll': 'enable'
    },

    safariWindowHeightFix: 34,
    myScroll: null,

    /**
     * If this mixin is present in a PageView instance it means that Scroller is enabled.
     * TODO: Currently not using it. Consider removing it
     * @return {Boolean}
     */
    isScrollerEnabled: function() {
        return true;
    },

    /**
     * Initiates the scroller for the page content where this mixin is mixed-in
     */
    openScroller: function() {

        // XXX: fix crumbled css in transition changePage for jquery mobile 1.0a3 in jquery.mobile.navigation.js
        // changePage in loadComplete in removeContainerClasses in .removeClass(pageContainerClasses.join(" "));
        this.$el.css({
            overflow: 'hidden'
        });

        console.log("Z.mixins.makePageViewScrollable: Safari Window Fix Height: " + this.safariWindowHeightFix);

        var barHeight = 0;
        var $header = this.$el.find(":jqmData(role='header')");
        if ($header.length) {
            $header.css({
                "z-index": 1000,
                "padding": 0,
                "width": "100%"
            });
            var headerHeight = $header.height();
            console.log("Z.mixins.makePageViewScrollable: Header Height: " + headerHeight);
            barHeight += headerHeight;
        }

        var $footer = this.$el.find(":jqmData(role='footer')");
        if ($footer.length) {
            $footer.css({
                "z-index": 1000,
                "padding": 0,
                "width": "100%"
            });
            var footerHeight = $footer.height();
            console.log("Z.mixins.makePageViewScrollable: Footer Height: " + footerHeight);
            barHeight += footerHeight;
        }

        console.log("Z.mixins.makePageViewScrollable: Header + Footer Height (Bar Height): " + barHeight);

        // Set the height of jqm content
        var $wrapper = this.$el.find(":jqmData(role='content')");
        if ($wrapper.length) {
            $wrapper.css({
                "z-index": 1,
                "position": 'relative'
            });

            var windowHeight = $(window).height();
            console.log("Z.mixins.makePageViewScrollable: Window Height: " + windowHeight);
            console.log("Z.mixins.makePageViewScrollable: Screen Height: " + $.mobile.getScreenHeight());

            var contentWrapperHeight = windowHeight - barHeight - this.safariWindowHeightFix;
            console.log("Z.mixins.makePageViewScrollable: Setting Content Wrapper Height to: " + contentWrapperHeight);
            $wrapper.height(contentWrapperHeight);

            // TODO: Determine why this is required
            $wrapper.on('touchmove', function (e) { e.preventDefault(); });
        }

        // Consider content as wrapper. Expected to have a div inside on wrapper called scroller
        var wrapper = $wrapper.get(0);
        if (wrapper) {
//        setTimeout(function() {
            this.myScroll = new iScroll(wrapper, {
                fixedScrollbar: false,
                hScroll: false,
                hScrollbar: false
            });
//        }, 100);
        }
    },

    /**
     * Destroys the scroller for the page content where this mixin is mixed-in
     */
    closeScroller: function() {
        if(this.myScroll) {
            this.myScroll.destroy();
        }
    },

    /**
     * Attaches to the onShow event of the view that Region triggers. Initiates the scroller at this time.
     * Does not have to check isScrollingEnabled(), openScroller etc, because it is assumed to be present in
     * the same mixin
     */
    onShow: function() {
        console.log("Z.mixins.makePageViewScrollable.onShow(): Opening Scroller");
        this.openScroller();
        console.log("Z.mixins.makePageViewScrollable.onShow(): Opened Scroller");
    },

    /**
     * Attaches to the onClose event of the view that Region triggers. Destroys of scroller at this time.
     * Does not have to check isScrollingEnabled(), closeScroller etc, because it is assumed to be present in
     * the same mixin
     */
    onClose: function() {
        console.log("Z.mixins.makePageViewScrollable.onClose(): Closing Scroller");
        this.closeScroller();
        console.log("Z.mixins.makePageViewScrollable.onClose(): Closed Scroller");
    }

};



