App.view.List2PageView = Z.jqm.PageView.extend({
    mixins: [
        Z.mixins.autoLinkNavigable,
        Z.mixins.autoLinkHighlightable
    ],
    template: Z.util.getTemplate('TestPage/List2Page.html')
});
