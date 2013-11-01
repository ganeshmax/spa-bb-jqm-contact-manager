var jqmExt = {
    EVENT: {
        MOBILE_INIT: 'mobileinit',
        PAGE_HIDE: 'pagehide',
        PAGE_SHOW: 'pageshow',
        PAGE_CHANGE: 'pagechange'
    },

    removeFrameworkFeatures: function() {

        // Disable handling links and form submissions using AJAX.
        // Disable hash listening and URLs will load as ordinary HTTP requests
        $.mobile.ajaxEnabled = false;

        // Disable binding event handlers to links and buttons
        // Disable addition of active button state and link blurring
        $.mobile.linkBindingEnabled = false;

        // Disable hash listening. Works in collaboration with ajaxEnabled
        $.mobile.hashListeningEnabled = false;

        // Disable pushState based hash fragments.
        // We want to use real hash fragments for our Backbone application
        $.mobile.pushStateEnabled = false;

        // Disable by setting to 999.
        // This will not show the scrolled position when the user goes back to the prev page
        $.mobile.minScrollBack = 999;

        // Supporting CORS from packaged apps
        $.support.cors = true;
        $.mobile.allowCrossDomainPages = true;
        $.mobile.pushState = false;


        // Configure the JQM loading widget
        $.mobile.loader.prototype.options.text = "Loading...";
        $.mobile.loader.prototype.options.textVisible = true;
        $.mobile.loader.prototype.options.theme = "a";
        $.mobile.loader.prototype.options.html = "";
    }
};

$(document).on(jqmExt.EVENT.MOBILE_INIT, function () {
    jqmExt.removeFrameworkFeatures();
});
