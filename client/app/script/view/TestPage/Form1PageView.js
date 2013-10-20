App.view.Form1PageView = Z.jqm.PageView.extend({
    mixins: [
        Z.mixins.autoLinkNavigable,
        Z.mixins.autoLinkHighlightable
    ],

    template: Z.util.getTemplate("TestPage/Form1Page.html")
});
