App.view.List2PageView = Z.jqm.PageView.extend({
    mixins: [
        Z.mixins.makePageLinkAutoNavigable,
        Z.mixins.makeListViewHighlightable
    ],
    template: Z.util.getTemplate('TestPage/List2Page.html')
});
