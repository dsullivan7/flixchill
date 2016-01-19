var EventEmitter = require('events').EventEmitter
var assign = require('object-assign')

var MyStore = assign({}, EventEmitter.prototype,{
    emitChange:function(){
        this.emit('change')
    }
})

module.exports = MyStore