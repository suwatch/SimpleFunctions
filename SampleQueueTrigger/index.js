var ipconfig = require('./ipconfig.js');

module.exports = function (context, workItem) {
    context.log('QueueTrigger ' + workItem.id + ' handled by ' + ipconfig.IPv4);
    context.done(null, workItem);
}