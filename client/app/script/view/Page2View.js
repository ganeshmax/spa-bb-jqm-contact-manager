App.module('view', function(view, App, Backbone, Marionette, $, _) {

    view.Page2View = Vmobile.JqmPageView.extend({
        mixins: [Vmobile.mixins.autoLinkNavigation],
        template: TemplateUtil.getTemplate('Page2.html')
    })
});