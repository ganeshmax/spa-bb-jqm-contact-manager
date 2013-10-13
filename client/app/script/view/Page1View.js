App.view.Page1View = Z.jqm.PageView.extend({
    mixins: [
        Z.mixins.autoLinkNavigation,
        Z.mixins.autoLinkHighlight
    ],
    template: Z.util.getTemplate("Page1.html")
});
