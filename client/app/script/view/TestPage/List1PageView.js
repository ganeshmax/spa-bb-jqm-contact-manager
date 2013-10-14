App.view.List1PageView = Z.jqm.PageView.extend({
    mixins: [
        Z.mixins.autoLinkNavigation,
        Z.mixins.autoLinkHighlight
    ],
    template: Z.util.getTemplate("TestPage/List1Page.html")
});
