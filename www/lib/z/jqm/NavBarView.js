
Z.jqm.NavBarView = Z.ItemView.extend({
    tagName: 'div',

    attributes: {
        'data-role': 'navbar',
        'class': 'nav-glyphish'
    },

    // sub-class may specify a template that will override this with a valid value
    template: null,

    initialize: function(options) {
        console.log("Z.jqm.NavBarView: Template: " + this.template);

        // TODO: Think about not storing options. This could result in conflict with other sub-classes
        this.options = options;

        // If options specifies a template, it takes priority over the sub-class provided one
        if(options.template) {
            this.template = Z.util.getTemplate(options.template);
        }

    },

    onRender: function() {
        // If an activeItem selector is supplied, make that item active
        if(this.options.activeItem) {
            this.$el.find(this.options.activeItem).addClass('ui-btn-active');
        }
    }

});
