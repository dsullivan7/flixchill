var MyDispatcher = require('../dispatcher/MyDispatcher.js')

var MyAction = {
    showMessage:function(message){
        MyDispatcher.handleViewAction({
            actionType:'SHOW_MESSAGE',
            message:message
        });
    }
};

module.exports = MyAction