/**
 * Add to mixin to any page to make any "a" tag with a data-btn-type=generic to automatically create a
 * new JQM Page and transition to it. This is just a convenience mixin for prototyping purposes.
 *
 * In a real application, every Page/View may have constructor options and special instructions for creation,
 * transition and destruction. This mixin does not allow for any such customizations like that.
 * @type {Object}
 */
Z.mixins.makePageLinkAutoNavigable = {

    events: {
        "tap a:jqmData(btn-type='generic')": 'gotoPage'
    },

    gotoPage: function(event) {
        console.log("Generic GotoPage Called 1");

        // Ensure ghost click doesn't occur. https://developers.google.com/mobile/articles/fast_buttons
        event.preventDefault();

        var $clickedLink = $(event.target).closest("a");

        var transition = $clickedLink.jqmData('transition');
        transition = transition ? transition : 'slide';

        var isReverse = $clickedLink.jqmData('reverse');
        isReverse = (isReverse === 'true');

        var clickedLinkHref = $clickedLink.attr('href');
        var pageToNavigate = clickedLinkHref.substring(1) + 'View';

        console.log("Page to navigate: " + pageToNavigate);

        console.log("Promise.start(): After showPage is complete");
        $.mobile.loading('show');
        setTimeout(function() { // Sets some timeout just to demonstrate loading show/hide
            App.body.showPage(new App.view[pageToNavigate](), {
                transition: transition,
                reverse: isReverse
            }).done(function() {
                console.log("Promise.done(): After showPage is complete");
                $.mobile.loading('hide');
            });
        }, 100);

    }

};

