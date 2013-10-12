Vmobile.mixins.autoLinkHighlight = {

    events: {
        "click ul:jqmData(role='listview') li": 'highlightLink'
    },

    highlightLink: function(event) {
        console.log("Highlight link called");
        $(event.target).closest('ul').find('li').attr('data-theme', 'c')
                        .removeClass("ui-btn-up-b").removeClass('ui-btn-hover-b')
                        .addClass("ui-btn-up-c").addClass('ui-btn-hover-c');

        $(event.target).attr('data-theme', 'b')
                        .removeClass("ui-btn-up-c").removeClass('ui-btn-hover-c')
                        .addClass("ui-btn-up-b").addClass('ui-btn-hover-b');

    }

};