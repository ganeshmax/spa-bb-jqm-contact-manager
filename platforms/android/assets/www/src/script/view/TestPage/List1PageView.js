App.view.List1PageView = Z.jqm.PageView.extend({
    mixins: [
        Z.mixins.makePageLinkAutoNavigable,
        Z.mixins.makeListViewHighlightable,
        Z.mixins.makePageViewScrollable
    ],
    template: Z.util.getTemplate("TestPage/List1Page.html")
});
