var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var MovieStore = require('./MovieStore');

var personProfiles = [
    {photoLink:"img1.jpg", name: "Rachael", movies: [1, 2, 3]},
    {photoLink:"img2.jpg", name: "Natalie", movies: [1, 2, 3]},
    {photoLink:"img3.jpg", name: "Penelope", movies: [1, 2, 3]}
    ];

var personIndex = 0;
var movieIndex = 0;
var personProfile = personProfiles[personIndex];
var movie = MovieStore.getMovie(personProfile.movies[movieIndex]);

var PersonProfileStore = assign({}, EventEmitter.prototype, {

    emitChange : function(){
        this.emit('change');
    },

    getPersonProfile : function(){
        return personProfile;
    },

    getMovie : function(){
        return movie;
    },

    setNextPersonProfile : function(){
        // set the personProfile
        movieIndex = 0;
        personIndex++;
        personProfile = personProfiles[personIndex % personProfiles.length];
    },

    setNextMovie : function(){
        // set the movie
        movieIndex++;
        movie = MovieStore.getMovie(personProfile.movies[movieIndex %
                                    personProfile.movies.length]);
    },

    addChangeListener : function(callback) {
        this.on("change", callback)
    },

    removeChangeListener : function(callback) {
        this.removeListener("change", callback)
    },
});

module.exports = PersonProfileStore;