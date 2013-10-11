App.module('view', function(view, App, Backbone, Marionette, $, _) {

    view.ContactEntryPageView = Vmobile.JqmPageView.extend({

        mixins: [Vmobile.mixins.automaticPageNavigation],
        template: TemplateUtil.getTemplate("ContactEntryPage/ContactEntryPage.html"),

        mode: 'view',

        events: {
            'click #btnSaveContact': 'saveContact',
            'click #btnCancelContact': 'cancelContact'
        },

        initialize: function(options) {
            this.mode = options.mode
        },


        saveContact: function() {
            App.body.show()
        },

        cancelContact: function() {

        }

    })
});