Z.mixins.iscrollScrolling = {

    attributes: {
        'data-iscroll': 'enable'
    },

    safariWindowHeightFix: 34,
    myScroll: null,

    openScrolling: function() {

        // XXX: fix crumbled css in transition changePage for jquery mobile 1.0a3 in jquery.mobile.navigation.js
        // changePage in loadComplete in removeContainerClasses in .removeClass(pageContainerClasses.join(" "));
        this.$el.css({
            overflow: 'hidden'
        });

        var barHeight = 0;
        var $header = this.$el.find(":jqmData(role='header')");
        if ($header.length) {
            $header.css({
                "z-index": 1000,
                "padding": 0,
                "width": "100%"
            });
            barHeight += $header.height();
        }

        var $footer = this.$el.find(":jqmData(role='footer')");
        if ($footer.length) {
            $footer.css({
                "z-index": 1000,
                "padding": 0,
                "width": "100%"
            });
            barHeight += $footer.height();
        }

        // Set the height of jqm content
        var $wrapper = this.$el.find(":jqmData(role='content')");
        if ($wrapper.length) {
            $wrapper.css({
                "z-index": 1,
                "position": 'relative'
            });
            $wrapper.height($(window).height() - barHeight - this.safariWindowHeightFix);
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

    closeScrolling: function() {
        if(this.myScroll) {
            this.myScroll.destroy();
        }
    }
};



