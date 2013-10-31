App.view.List2PageView = Z.jqm.PageView.extend({
    mixins: [
        Z.mixins.makePageLinkAutoNavigable,
        Z.mixins.makeListViewHighlightable
    ],
    template: Z.util.getTemplate('TestPage/List2Page.html'),

    onRender: function() {
        this.footer.show(new App.view.FooterNavBarView({
            activeItem: '#menuFavorites'
        }))
    }
});
