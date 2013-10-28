_.extend(Z.util, {

    slice: function(args) {
        Array.prototype.slice.call(args);
    },

    getBoolean: function(str) {
        var result = false;
        result = _.isUndefined()
    },

    getTemplate: function(name) {
        return window["JST"][name];
    }
});
