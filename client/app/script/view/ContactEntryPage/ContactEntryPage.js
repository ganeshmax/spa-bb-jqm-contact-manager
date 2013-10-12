App.module('view', function(view, App, Backbone, Marionette, $, _) {

    view.ContactEntryPageView = Z.PageView.extend({

        mixins: [Z.mixins.autoLinkNavigation],
        template: TemplateUtil.getTemplate("ContactEntryPage/ContactEntryPage.html"),

        events: {
            'click #btnSaveContact': 'saveContact',
            'click #btnCancelContact': 'cancelContact',
            'click #btnEditContact': 'gotoEditMode'
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


        saveContact: function() {
            console.log("saveContact()");
            this.gotoViewMode();
        },

        cancelContact: function() {
            console.log("cancelContact()");
            App.body.showPage(new App.view.ContactListPageView());
        },

        editContact: function() {
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

    })
});