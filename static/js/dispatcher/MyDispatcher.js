var Dispatcher = require("flux").Dispatcher;
var assign = require('object-assign');
var MyStore = require('../stores/MyStore.js')

var MyDispatcher = assign(new Dispatcher(), {
    handleViewAction: function(action){
        this.dispatch({
            source:'VIEW_ACTION',
            action:action
        })
    }
});

MyDispatcher.register(function(payload){
    MyStore.setPhotoLink("img2.jpg")
    MyStore.emitChange()
})

module.exports = MyDispatcher