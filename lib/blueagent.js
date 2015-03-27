var Promise = require('bluebird');
var blueagent = Promise.promisifyAll(require('superagent'));

blueagent.Request.prototype.cancellable = function () { 
    return this.endAsync().cancellable();
};
  
blueagent.Request.prototype.then = function (done) { 
    return this.endAsync().then(done); 
};

module.exports = blueagent;
