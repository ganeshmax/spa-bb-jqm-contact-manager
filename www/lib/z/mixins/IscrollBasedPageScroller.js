/**
 * A temporary attempt at creating a Scroller mixin like Z.mixins.makePageViewScrollable but with customization.
 * Consequently, a class has been implemented instead of a plain object.
 * There are some issues that are still unresolved in this implementation like "instance prototype methods are not
 * getting added into the Page/View while mixing in". I have worked around that problem by having all the methods
 * directly on the instance instead of the instance's prototype, but that may not be a memory efficient solution.
 *
 * TODO: WIP
 * @type {*}
 */
Z.mixins.IscrollBasedPageScroller = (function() {
    "use strict";

    var myScroll = null,
        options = {
            safariWindowHeightFix: 34,
            scroller: {
                fixedScrollbar: false,
                hScroll: false,
                hScrollbar: false
            }
        };

    var Scrollable = function(_options) {
        options = _.extend (options, _options);

        _.extend(this, {

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

                // Fix crumbled CSS in transition changePage() for jqm 1.0a3
                this.$el.css({
                    overflow: 'hidden'
                });

                console.log("Z.mixins.IscrollBasedPageScroller: safariWindowHeightFix: " + options.safariWindowHeightFix);

                var barHeight = 0;
                var $header = this.$el.find(":jqmData(role='header')");
                if ($header.length) {
                    $header.css({ "z-index": 1000, "padding": 0, "width": "100%" });
                    var headerHeight = $header.height();
                    console.log("Z.mixins.IscrollBasedPageScroller: Header Height: " + headerHeight);
                    barHeight += headerHeight;
                }

                var $footer = this.$el.find(":jqmData(role='footer')");
                if ($footer.length) {
                    $footer.css({ "z-index": 1000, "padding": 0, "width": "100%" });
                    var footerHeight = $footer.height();
                    console.log("Z.mixins.IscrollBasedPageScroller: Footer Height: " + footerHeight);
                    barHeight += footerHeight;
                }

                console.log("Z.mixins.IscrollBasedPageScroller: Bar Height: " + barHeight);

                // Set the height of jqm content
                var $wrapper = this.$el.find(":jqmData(role='content')");
                if ($wrapper.length) {
                    $wrapper.css({ "z-index": 1, "position": 'relative' });

                    var windowHeight = $(window).height();
                    console.log("Z.mixins.IscrollBasedPageScroller: Window Height: " + windowHeight);

                    var contentWrapperHeight = windowHeight - barHeight - options.safariWindowHeightFix;
                    console.log("Z.mixins.IscrollBasedPageScroller: Setting Content Wrapper Height to: " + contentWrapperHeight);
                    $wrapper.height(contentWrapperHeight);

                    // TODO: Determine why this is required
                    $wrapper.on('touchmove', function (e) { e.preventDefault(); });
                }

                // Consider content as wrapper. Expected to have a div inside on wrapper called scroller
                var wrapper = $wrapper.get(0);
                if (wrapper) {
                    myScroll = new iScroll(wrapper, options.scroller);
                }
            },

            /**
             * Destroys the scroller for the page content where this mixin is mixed-in
             */
            closeScroller: function() {
                if(myScroll) {
                    myScroll.destroy();
                }
            },

            /**
             * Attaches to the onShow event of the view that Region triggers. Initiates the scroller at this time.
             * Does not have to check isScrollingEnabled(), openScroller etc, because it is assumed to be present in
             * the same mixin
             */
            onShow: function() {
                console.log("Z.mixins.IscrollBasedPageScroller.onShow(): Opening Scroller");
                this.openScroller();
                console.log("Z.mixins.IscrollBasedPageScroller.onShow(): Opened Scroller");
            },

            /**
             * Attaches to the onClose event of the view that Region triggers. Destroys of scroller at this time.
             * Does not have to check isScrollingEnabled(), closeScroller etc, because it is assumed to be present in
             * the same mixin
             */
            onClose: function() {
                console.log("Z.mixins.IscrollBasedPageScroller.onClose(): Closing Scroller");
                this.closeScroller();
                console.log("Z.mixins.IscrollBasedPageScroller.onClose(): Closed Scroller");
            },

            /**
             * Standard method for refreshing a scroller on DOM Change
             */
            refreshScroller: function() {
                setTimeout(function() {
                    myScroll.refresh();
                }, 0);
            },

            /**
             * Use this to get access to the scroller object to perform custom functions provided by the scroller
             * @return {*}
             */
            getScroller: function() {
                return myScroll;
            }

        });
    };



    return Scrollable;
})();