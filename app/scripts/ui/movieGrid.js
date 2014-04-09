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
                    image: movie.posters.detailed,
                    title: movie.title,
                    criticsScore: movie.ratings.critics_score,
                    audienceScore: movie.ratings.audience_score,
                    link: movie.links.alternate
                });

                self.$el.append(li.el);
            });
        }

    });

    return MovieGrid;
});