App.module('view', function(view, App, Backbone, Marionette, $, _) {

    view.SettingsPageView = Z.jqm.PageView.extend({

        mixins: [Z.mixins.autoLinkNavigation],
        template: TemplateUtil.getTemplate("SettingsPage/SettingsPage.html")

    })
});