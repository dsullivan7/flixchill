var Dispatcher = require("flux").Dispatcher;
var assign = require('object-assign');
var PersonProfileStore = require("../stores/PersonProfileStore");
var MatchStore = require("../stores/MatchStore");
var MovieStore = require("../stores/MovieStore");

var MyDispatcher = assign(new Dispatcher(), {
    handleViewAction: function(payload){
        this.dispatch(payload);
    }
});

MyDispatcher.register(function(payload){
    if (payload.actionType === "swipe"){
        if (payload.view === "person"){
            if (payload.option === "like"){
                MatchStore.setMatchStatus(true);
                MatchStore.emitChange();
            }else{
                PersonProfileStore.setNextPersonProfile();
                PersonProfileStore.emitChange();
            }
        }else if(payload.view === "movie"){
            PersonProfileStore.setNextMovie();
            PersonProfileStore.emitChange();
        }
    }else if (payload.actionType === "unmatch"){
        MatchStore.setMatchStatus(false);
        MatchStore.emitChange();
    }
});

module.exports = MyDispatcher;