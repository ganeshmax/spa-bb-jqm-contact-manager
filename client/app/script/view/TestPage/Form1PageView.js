App.view.Form1PageView = Z.jqm.PageView.extend({
    mixins: [
        Z.mixins.autoLinkNavigation,
        Z.mixins.autoLinkHighlight
    ],

    template: Z.util.getTemplate("TestPage/Form1Page.html")
});
