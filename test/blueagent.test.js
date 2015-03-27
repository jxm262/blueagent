var blueagent = require('../lib/blueagent')
    , mocha = require('mocha')
    , chai = require('chai')
    , sinon = require('sinon')
    , should = chai.should()
    , chai_as_promised = require('chai-as-promised')
    , Promise = require('bluebird');

chai.use(chai_as_promised);

describe('blueagent.js', function () {

    it('should contain endAsync function', function(){
        return blueagent.get('test_url').should.have.property('endAsync');
    });

    it('should contain cancellable function', function(){
        return blueagent.get('test_url').should.have.property('cancellable');
    });

    it('should contain then function', function(){
        return blueagent.get('test_url').should.have.property('then');
    });

});
