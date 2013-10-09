App.module('View', function(View, App, Backbone, Marionette, $, _) {

    View.Page2View = Vmobile.PageView.extend({
        template: window["JST"]["client/app/script/template/Page2.html"],

        tagName: 'div',
        id: 'page2',
        attributes: {
            'data-role': 'page',
            'data-title': 'Contacts Title'
        },

        events: {
            'click #btnGotoPage1': 'gotoPage1'
        },

        gotoPage1: function(event) {
            App.body.show(new App.View.Page1View());
        }

    })
});