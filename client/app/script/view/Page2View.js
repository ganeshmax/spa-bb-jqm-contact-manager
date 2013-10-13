App.view.Page2View = Z.jqm.PageView.extend({
    mixins: [
        Z.mixins.autoLinkNavigation,
        Z.mixins.autoLinkHighlight
    ],
    template: Z.util.getTemplate('Page2.html')
});
