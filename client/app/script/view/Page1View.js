App.module('view', function(view, App, Backbone, Marionette, $, _) {

    view.Page1View = Z.PageView.extend({
        mixins: [Z.mixins.autoLinkNavigation],
        template: TemplateUtil.getTemplate("Page1.html")
    })
});