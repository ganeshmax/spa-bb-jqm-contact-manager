App.module('view', function(view, App1, Backbone, Marionette, $, _) {

    view.ContactListItemView = Marionette.ItemView.extend({
        tagName: 'li',
        template: TemplateUtil.getTemplate("client/app/script/template/ContactListItem.html")

    })
});