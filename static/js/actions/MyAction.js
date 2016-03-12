var MyDispatcher = require('../dispatcher/MyDispatcher');

var MyAction = {
    /*
    a swipe to like or dislike
    */
    swipe: function(view, option){
        MyDispatcher.handleViewAction({
            actionType: 'swipe',
            view: view,
            option: option
        });
    }
};

module.exports = MyAction;