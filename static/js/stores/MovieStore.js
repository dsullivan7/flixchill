var EventEmitter = require('events').EventEmitter
var assign = require('object-assign')

var movies = {
    1 : {title: "The Fast and the Furios: Tokyo Drift",
         photoLink: "movie1.jpg"},
    2 : {title: "Step Up 2: The Streets",
         photoLink: "movie2.jpg"},
    3 : {"title" : "Junior",
         "photoLink": "movie3.jpg"}
};

var MovieStore = assign({}, EventEmitter.prototype,{
    getMovie : function(movieID){
        return movies[movieID];
    },
})

module.exports = MovieStore;