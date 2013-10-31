App.view.ContactEntryPageView = Z.jqm.PageView.extend({

    mixins: [
        Z.mixins.makePageLinkAutoNavigable,
        Z.mixins.makeListViewHighlightable
    ],

    template: Z.util.getTemplate("ContactEntryPage/ContactEntryPage.html"),

    events: {
        'tap #btnSaveContact': 'saveContact',
        'tap #btnCancelContact': 'cancelContact',
        'tap #btnEditContact': 'gotoEditMode'
    },

    /**
     * Send options with
     *      "mode"
     * @param options
     */
    initialize: function(options) {
        this.options.mode = options.mode ? options.mode : 'edit';
        this.$el.addClass(this.options.mode)
    },

    onRender: function() {
        this.footer.show(new App.view.FooterNavBarView({
            activeItem: '#menuContacts'
        }))
    },


    saveContact: function(event) {
        event.preventDefault();
        console.log("saveContact()");
        this.gotoViewMode();
    },

    cancelContact: function(event) {
        event.preventDefault();
        console.log("cancelContact()");
        App.body.showPage(new App.view.ContactListPageView(), {transition: 'pop', reverse: true});
    },

    editContact: function(event) {
        event.preventDefault();
        console.log("editContact()");
        this.gotoEditMode();
    },

    gotoEditMode: function() {
        console.log("gotoEditMode()");
        this.$el.removeClass("view").removeClass("edit").addClass("edit");
    },

    gotoViewMode: function() {
        console.log("gotoViewMode()");
        this.$el.removeClass("view").removeClass("edit").addClass("view");
    }

});
