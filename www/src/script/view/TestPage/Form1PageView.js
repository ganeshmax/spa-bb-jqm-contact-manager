App.view.Form1PageView = Z.jqm.PageView.extend({
    mixins: [
        Z.mixins.makePageLinkAutoNavigable,
        Z.mixins.makeListViewHighlightable
    ],

    template: Z.util.getTemplate("TestPage/Form1Page.html")
});
