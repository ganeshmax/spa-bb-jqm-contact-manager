App.view.List1PageView = Z.jqm.PageView.extend({
    mixins: [
        Z.mixins.autoLinkNavigable,
        Z.mixins.autoLinkHighlightable,
        Z.mixins.autoJqmPageContentScrollable
    ],
    template: Z.util.getTemplate("TestPage/List1Page.html")
});
