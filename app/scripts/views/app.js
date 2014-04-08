/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'tomatoes',
    'ui/movieGrid'
], function ($, _, Backbone, JST, Tomatoes, MovieGrid) {
    'use strict';

    var AppView = Backbone.View.extend({

        template: JST['app/scripts/templates/app.ejs'],

        initialize: function() {

        },

        render: function() {
            var self = this,
                movieGrid = null;

            // is there a better way to do this?
            Tomatoes.getBoxOfficeMovies(function(data) {
                self.movieGrid = new MovieGrid(data);
                self.$el.html(self.movieGrid.el);
            });

            return this;
        }
    });

    return AppView;
});
