App.module('view', function(view, App1, Backbone, Marionette, $, _) {

    view.ContactListPage = Vmobile.PageView.extend({
        template: TemplateUtil.getTemplate("client/app/script/template/ContactListPage.html"),

        initialize: function() {
            this.contactListView = new view.ContactListView({
                collection: App.model.contacts
            });
        },

        onRender: function() {
            this.content.show(this.contactListView);
        }
    })
});