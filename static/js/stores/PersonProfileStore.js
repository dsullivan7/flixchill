var EventEmitter = require('events').EventEmitter
var assign = require('object-assign')

var personProfiles = [
    {photoLink:"img1.jpg", name: "Rachael"},
    {photoLink:"img2.jpg", name: "Natalie"},
    {photoLink:"img3.jpg", name: "Penelope"}
    ]

var index = 0
var personProfile = personProfiles[index]

var PersonProfileStore = assign({}, EventEmitter.prototype,{

    emitChange : function(){
        this.emit('change')
    },

    getPersonProfile : function(){
        return personProfile
    },

    setPersonProfile : function(newPersonProfile){
        personProfile = newPersonProfile
    },

    setNextPersonProfile : function(){

        // generate a list of indexes excluding the current index
        var indexes = []
        for (var i = 0; i < personProfiles.length; i++){
            if (i != index){
                indexes.push(i)
            }
        }

        // choose a random index from our list of other indexes
        index = indexes[Math.floor(Math.random() * indexes.length)]

        // set the personProfile
        personProfile = personProfiles[index]
    },

    addChangeListener : function(callback) {
        this.on("change", callback)
    },
})

module.exports = PersonProfileStore