/**
 * Add this mixin to any page to automatically enable highlighting of list items in a listview when tapped
 *
 * TODO: Enable tap instead of click
 * @type {Object}
 */
Z.mixins.makeListViewHighlightable = {

    events: {
        "click ul:jqmData(role='listview') li": 'highlightLink'
    },

    highlightLink: function(event) {
        console.log("Highlight link called");
        var $clickedLink = $(event.target);
        $clickedLink.closest('ul').find('li').removeClass('ui-btn-active');
        $clickedLink.closest('li').addClass('ui-btn-active');
    }

};