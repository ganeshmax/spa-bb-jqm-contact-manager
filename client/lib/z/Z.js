var Z = {
    util: {},
    mixins: {},
    jqm: {}
};

Z.Application = Marionette.Application;

Z.View = Marionette.View;
Z.ItemView = Marionette.ItemView;
Z.Layout = Marionette.Layout;
Z.CollectionView = Backbone.Marionette.CollectionView;
Z.CompositeView = Backbone.Marionette.CompositeView;

Z.extend = Backbone.Model.extend;
Z.Events = Backbone.Events;