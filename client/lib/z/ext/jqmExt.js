var jqmExt = {
    event: {
        MOBILE_INIT: 'mobileinit',
        PAGE_HIDE: 'pagehide'
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

    }
};

$(document).bind(jqmExt.event.MOBILE_INIT, function () {
    jqmExt.removeFrameworkFeatures();
});