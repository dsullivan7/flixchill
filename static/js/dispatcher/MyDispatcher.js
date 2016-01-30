var Dispatcher = require("flux").Dispatcher;
var assign = require('object-assign');
var PersonProfileStore = require('../stores/PersonProfileStore.js')

var MyDispatcher = assign(new Dispatcher(), {
    handleViewAction: function(action){
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        })
    }
});

MyDispatcher.register(function(payload){
    PersonProfileStore.setNextPersonProfile()
    PersonProfileStore.emitChange()
})

module.exports = MyDispatcher