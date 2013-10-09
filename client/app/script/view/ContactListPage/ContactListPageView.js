App.module('view', function(view, App, Backbone, Marionette, $, _) {

    view.ContactListPageView = Vmobile.JqmPageView.extend({
        template: TemplateUtil.getTemplate("ContactListPage/ContactListPage.html"),

        initialize: function() {
            this.contactListView = new view.ContactListView({
                collection: new App.model.Contacts()
            });
        },

        onRender: function() {
            this.content.show(this.contactListView);
        }
    })
});