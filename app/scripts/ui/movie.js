/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var Movie = Backbone.View.extend({
        tagName: 'li',

        template: function(options){
            return JST['app/scripts/templates/movie.ejs'](options);
        },

        initialize: function(options){
            this.title = options.title;
            this.render();
        },


        render: function() {

            var template = this.template({
                title: this.title
            });

            this.$el.html(template);
        }

    });

    return Movie;
});