var EventEmitter = require('events').EventEmitter
var assign = require('object-assign')

var photoLink = "img1.jpg"

var MyStore = assign({}, EventEmitter.prototype,{

    emitChange : function(){
        this.emit('change')
    },

    getPhotoLink : function(){
        return photoLink
    },

    setPhotoLink : function(newPhotoLink){
        photoLink = newPhotoLink
    },

    addChangeListener : function(callback) {
        this.on("change", callback)
    },
})

module.exports = MyStore