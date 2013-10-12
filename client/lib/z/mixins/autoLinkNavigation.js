Z.mixins.autoLinkNavigation = {

    events: {
        "click a:jqmData(btn-type='generic')": 'gotoPage'
    },

    gotoPage: function() {
        console.log("Generic GotoPage Called");
        var $clickedLink = $(event.target).closest("a");
        var clickedLinkHref = $clickedLink.attr('href');
        var pageToNavigate = clickedLinkHref.substring(1) + 'View';
        console.log("Page to navigate: " + pageToNavigate);
        setTimeout(function() {
            App.body.showPage(new App.view[pageToNavigate](), {transition: 'slide'});
        }, 1000);
    }

};

