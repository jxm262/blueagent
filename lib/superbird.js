var Promise = require('bluebird');
var superagent = Promise.promisifyAll(require('superagent'));

superagent.Request.prototype.cancellable = function () { 
    return this.endAsync().cancellable();
};
  
superagent.Request.prototype.then = function (done) { 
    return this.endAsync().then(done); 
};

module.exports = superagent;
