Z.mixins.autoLinkNavigation = {

    events: {
        "click a:jqmData(btn-type='generic')": 'gotoPage'
    },

    gotoPage: function() {
        console.log("Generic GotoPage Called");
        var $clickedLink = $(event.target).closest("a");

        var transition = $clickedLink.jqmData('transition');
        transition = transition ? transition : 'slide';

        var isReverse = $clickedLink.jqmData('reverse');
        isReverse = (isReverse === 'true') ? true : false

        var clickedLinkHref = $clickedLink.attr('href');
        var pageToNavigate = clickedLinkHref.substring(1) + 'View';

        console.log("Page to navigate: " + pageToNavigate);

        App.body.showPage(new App.view[pageToNavigate](), {
            transition: transition
        });
    }

};

