App.module('view', function(view, App, Backbone, Marionette, $, _) {

    view.Page1View = Vmobile.JqmPageView.extend({
        template: TemplateUtil.getTemplate("Page1.html")
    })
});