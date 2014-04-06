define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone){

    var RottenTomatoes = {
        apikey = '7jyadrpxu7fpa8xmtzgfghfx',

        baseUrl = 'http://api.rottentomatoes.com/api/public/v1.0/',

        movieUrl: function() {
            return this.baseUrl + '/movies.json?apikey=' + this.apikey;
        },

        query: function() {
            var self = this;
        }
    };

});