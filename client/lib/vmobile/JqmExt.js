var jqm = {
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
    },

    removePageAfterTransitioningOut: function() {
        // Remove page from DOM when it's being replaced
        // TODO: Verify this behavior and replace this with .delegate() or .on() method as appropriate
//        $('body').on('pagehide', 'div[data-role="page"]', function (event, ui) {
//            $(event.currentTarget).remove();
//        });
    }
};

$(document).bind("mobileinit", function () {

    jqm.removeFrameworkFeatures();
    jqm.removePageAfterTransitioningOut();
});