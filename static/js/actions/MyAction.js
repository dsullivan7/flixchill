var MyDispatcher = require('../dispatcher/MyDispatcher.js')

var MyAction = {
    swipe:function(option){
        MyDispatcher.handleViewAction({
            actionType: 'SWIPE',
            option: option
        });
    }
};

module.exports = MyAction