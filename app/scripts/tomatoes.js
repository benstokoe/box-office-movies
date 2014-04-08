'use strict';

define([
], function(){

    var RottenTomatoes = {
        apikey: '7jyadrpxu7fpa8xmtzgfghfx',

        baseUrl: 'http://api.rottentomatoes.com/api/public/v1.0',

        buildMovieUrl: function() {
            return this.baseUrl + '/movies.json?apikey=' + this.apikey;
        },

        getBoxOfficeMovies: function(callback) {
            $.ajax({
                url: 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?apikey=7jyadrpxu7fpa8xmtzgfghfx',
                dataType: 'jsonp',
                success: callback
            });
        }
    };

    return RottenTomatoes;

});