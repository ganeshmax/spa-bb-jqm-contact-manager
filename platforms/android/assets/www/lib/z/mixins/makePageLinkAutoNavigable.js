Z.mixins.makePageLinkAutoNavigable = {

    events: {
        "tap a:jqmData(btn-type='generic')": 'gotoPage'
    },

    gotoPage: function(event) {
        console.log("Generic GotoPage Called 1");

        // This is to ensure that a ghost click doesn't happen
        // https://developers.google.com/mobile/articles/fast_buttons
        event.preventDefault();

        var $clickedLink = $(event.target).closest("a");

        var transition = $clickedLink.jqmData('transition');
        transition = transition ? transition : 'slide';

        // TODO: Remove. Temporary for testing
        if(transition === 'none') {
            transition = 'fade';
        }

        var isReverse = $clickedLink.jqmData('reverse');
        isReverse = (isReverse === 'true') ? true : false

        var clickedLinkHref = $clickedLink.attr('href');
        var pageToNavigate = clickedLinkHref.substring(1) + 'View';

        console.log("Page to navigate: " + pageToNavigate);

        console.log("Promise.start(): After showPage is complete");
        $.mobile.loading('show');
        setTimeout(function() {
            App.body.showPage(new App.view[pageToNavigate](), {
                transition: transition,
                reverse: isReverse
            }).done(function() {
                    console.log("Promise.done(): After showPage is complete");
                    $.mobile.loading('hide');
            });
        }, 300);

    }

};

