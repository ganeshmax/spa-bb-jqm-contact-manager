App.module('view', function(view, App, Backbone, Marionette, $, _) {

    view.Page1View = Vmobile.JqmPageView.extend({
        mixins: [Vmobile.mixins.autoLinkNavigation],
        template: TemplateUtil.getTemplate("Page1.html")
    })
});