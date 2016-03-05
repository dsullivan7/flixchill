var MyDispatcher = require('../dispatcher/MyDispatcher.js')

var MyAction = {
    /*
    a swipe right or left
    */
    swipe:function(option){
        MyDispatcher.handleViewAction({
            actionType: 'SWIPE',
            option: option
        });
    }
};

module.exports = MyAction