/**
 * Interface & Implementation for any Scroller implementation that will make a JQM content auto scrollable.
 * This implementation uses iScroll for scroller implementation, and consequently requires iscroll.js to be
 * included in the page.
 * Other implementations can choose to use a different scroller, but must implement the methods listed in this
 * implementation if the scroller has to work as a mixin in any Z.jqm.PageView implementation
 * @type {Object}
 */
Z.mixins.autoJqmPageContentScrollable = {

    attributes: {
        // TODO: Remove. Was used before to determine if scroller is enabled in a given page.
        // Now, mere presence (inclusion) of this mixin confirms that scrolling is enabled in a page.
//        'data-iscroll': 'enable'
    },

    safariWindowHeightFix: 34,
    myScroll: null,

    isScrollerEnabled: function() {
        return true;
    },

    openScroller: function() {

        // XXX: fix crumbled css in transition changePage for jquery mobile 1.0a3 in jquery.mobile.navigation.js
        // changePage in loadComplete in removeContainerClasses in .removeClass(pageContainerClasses.join(" "));
        this.$el.css({
            overflow: 'hidden'
        });

        console.log("Z.mixins.autoJqmPageContentScrollable: Safari Window Fix Height: " + this.safariWindowHeightFix);

        var barHeight = 0;
        var $header = this.$el.find(":jqmData(role='header')");
        if ($header.length) {
            $header.css({
                "z-index": 1000,
                "padding": 0,
                "width": "100%"
            });
            var headerHeight = $header.height();
            console.log("Z.mixins.autoJqmPageContentScrollable: Header Height: " + headerHeight);
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
            console.log("Z.mixins.autoJqmPageContentScrollable: Footer Height: " + footerHeight);
            barHeight += footerHeight;
        }

        console.log("Z.mixins.autoJqmPageContentScrollable: Header + Footer Height (Bar Height): " + barHeight);

        // Set the height of jqm content
        var $wrapper = this.$el.find(":jqmData(role='content')");
        if ($wrapper.length) {
            $wrapper.css({
                "z-index": 1,
                "position": 'relative'
            });

            var windowHeight = $(window).height();
            console.log("Z.mixins.autoJqmPageContentScrollable: Window Height: " + windowHeight);

            var contentWrapperHeight = windowHeight - barHeight - this.safariWindowHeightFix;
            console.log("Z.mixins.autoJqmPageContentScrollable: Setting Content Wrapper Height to: " + contentWrapperHeight);
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

    closeScroller: function() {
        if(this.myScroll) {
            this.myScroll.destroy();
        }
    }
};



