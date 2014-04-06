/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'tomatoes'
], function ($, _, Backbone, JST, Tomatoes) {
    'use strict';

    var AppView = Backbone.View.extend({
        template: JST['app/scripts/templates/app.ejs'],

        initialize: function() {

        },

        render: function() {
            var self = this;
            Tomatoes.getBoxOfficeMovies(function(data) {
                _.each(data.movies, function(value) {
                    self.$el.append(value.title + '<br>');
                });
            });
            return this;
        }
    });

    return AppView;
});
