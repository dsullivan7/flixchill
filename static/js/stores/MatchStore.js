var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var matchStatus = false;

var MatchStore = assign({}, EventEmitter.prototype,{

    emitChange : function(){
        this.emit('change');
    },

    getMatchStatus : function(){
        return matchStatus;
    },

    setMatchStatus : function(newMatchStatus){
        matchStatus = newMatchStatus;
    },

    addChangeListener : function(callback) {
        this.on("change", callback);
    },

    removeChangeListener : function(callback) {
        this.removeListener("change", callback)
    },

})

module.exports = MatchStore;