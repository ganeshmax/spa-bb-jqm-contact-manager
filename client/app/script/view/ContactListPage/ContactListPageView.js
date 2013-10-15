App.view.ContactListPageView = Z.jqm.PageView.extend({

    mixins: [
        Z.mixins.autoLinkNavigation,
        Z.mixins.autoLinkHighlight
    ],

    template: Z.util.getTemplate("ContactListPage/ContactListPage.html"),

    events: {
        'tap a#btnAddContact': 'showAddContactPage'
    },

    initialize: function(options) {

        // TODO: Dummy. Just so that auto link navigation works without collection.
        var contacts = options.collection ? options.collection : App.model.contacts;

        this.contactListView = new App.view.ContactListView({
            collection: contacts
        });
    },

    onRender: function() {
        this.content.show(this.contactListView);
    },

    showAddContactPage: function(event) {
        event.preventDefault();
        console.log('Clicked Add Contact Button');
        App.body.showPage(new App.view.ContactEntryPageView(), {transition: 'pop'});
    }
});
