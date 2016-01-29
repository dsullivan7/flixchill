var Dispatcher = require("flux").Dispatcher;
var assign = require('object-assign');
var MyStore = require('../stores/MyStore.js')

var MyDispatcher = assign(new Dispatcher(), {
    handleViewAction: function(action){
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        })
    }
});

MyDispatcher.register(function(payload){
    MyStore.setNextPersonProfile()
    MyStore.emitChange()
})

module.exports = MyDispatcher