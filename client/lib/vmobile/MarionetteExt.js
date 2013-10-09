Backbone.Marionette.Renderer.render = function(template, data) {
    return template(data);
};

// Save a copy of the original open() method so that we can delegate to it if the view is not a page
var oldMarionetteRegionOpen = Marionette.Region.prototype.open;

// Replace open() method with an implementation that branches depending on whether the view is a page or not
Marionette.Region.prototype.open = function(view) {

    // If View has a isPage() method and if isPage() is true, then it is a PageView
    if(view.isPage && view.isPage()) {

        var $el = view.$el;
        this.$el.append($el);
        setTimeout(function() {
            $.mobile.changePage($el, {changeHash:false, transition: 'slide'});
        }, 1);

    } else {
        oldMarionetteRegionOpen.apply(this, arguments);
    }

};
