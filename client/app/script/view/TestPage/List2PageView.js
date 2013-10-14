App.view.List2PageView = Z.jqm.PageView.extend({
    mixins: [
        Z.mixins.autoLinkNavigation,
        Z.mixins.autoLinkHighlight
    ],
    template: Z.util.getTemplate('TestPage/List2Page.html')
});
