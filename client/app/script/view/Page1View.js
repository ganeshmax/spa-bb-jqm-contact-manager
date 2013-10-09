App.module('View', function(View, App1, Backbone, Marionette, $, _) {

    View.Page1View = Vmobile.PageView.extend({
        template: TemplateUtil.getTemplate("client/app/script/template/Page1.html"),

//        id: 'page1',
        attributes: {
            'data-title': 'Contacts Title'
        },

        events: {
            'click #btnGotoPage2': 'gotoPage2'
        },

        gotoPage2: function(event) {
            App.body.show(new App.View.Page2View());
        }
    })
});