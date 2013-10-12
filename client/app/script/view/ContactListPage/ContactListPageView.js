App.module('view', function(view, App, Backbone, Marionette, $, _) {

    view.ContactListPageView = Z.jqm.PageView.extend({

        mixins: [
            Z.mixins.autoLinkNavigation,
//            Z.mixins.autoLinkHighlight
        ],
        template: TemplateUtil.getTemplate("ContactListPage/ContactListPage.html"),

        events: {
            'click a#btnAddContact': 'showAddContactPage'
        },

        initialize: function() {
            this.contactListView = new view.ContactListView({
                collection: new App.model.Contacts()
            });
        },

        onRender: function() {
            this.content.show(this.contactListView);
        },

        showAddContactPage: function(event) {
            console.log('Clicked Add Contact Button');
            App.body.showPage(new App.view.ContactEntryPageView(), {transition: 'pop'});
        }
    })
});
