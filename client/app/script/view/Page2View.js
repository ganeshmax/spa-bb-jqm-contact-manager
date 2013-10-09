App.module('view', function(view, App, Backbone, Marionette, $, _) {

    view.Page2View = Vmobile.PageView.extend({
        template: TemplateUtil.getTemplate('client/app/script/template/Page2.html'),

        attributes: {
            'data-title': 'Contacts Title'
        },

        events: {
            'click #btnGotoPage1': 'gotoPage1'
        },

        gotoPage1: function(event) {
            App.body.show(new App.view.Page1View());
        }

    })
});