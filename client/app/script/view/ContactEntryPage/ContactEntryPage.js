App.module('view', function(view, App, Backbone, Marionette, $, _) {

    view.ContactEntryPageView = Vmobile.JqmPageView.extend({
        mixins: [Vmobile.mixins.automaticPageNavigation],
        template: TemplateUtil.getTemplate("ContactEntryPage/ContactEntryPage.html"),

        events: {
        },

        initialize: function() {

        }

    })
});