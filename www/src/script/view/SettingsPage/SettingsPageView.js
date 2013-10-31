App.view.SettingsPageView = Z.jqm.PageView.extend({

    mixins: [Z.mixins.makePageLinkAutoNavigable],
    template: Z.util.getTemplate("SettingsPage/SettingsPage.html"),

    onRender: function() {
        this.footer.show(new App.view.FooterNavBarView({
            activeItem: '#menuSettings'
        }))
    }

});
