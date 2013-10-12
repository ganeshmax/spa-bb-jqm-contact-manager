App.module('view', function(view, App, Backbone, Marionette, $, _) {

    view.Page2View = Z.PageView.extend({
        mixins: [Z.mixins.autoLinkNavigation],
        template: TemplateUtil.getTemplate('Page2.html')
    })
});