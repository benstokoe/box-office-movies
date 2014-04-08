/* global define */

define([
    'jquery',
    'underscore',
    'backbone',
    'ui/movie'
], function ($, _, Backbone, Movie) {
    'use strict';

    var MovieGrid = Backbone.View.extend({
        tagName: 'ul',
        className: 'movie-grid',

        initialize: function(data){
            this.data = data;
            this.render();
        },

        render: function(){
            this.buildList(this.data.movies);
            this.$el.html();
        },

        buildList: function(movies){
            var self = this;

            _.each(movies, function(movie){

                var li = new Movie({
                        title: movie.title
                    });

                self.$el.append(li.el);
            });
        }

    });

    return MovieGrid;
});