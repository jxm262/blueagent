var superbird = require('../lib/superbird')
    , mocha = require('mocha')
    , chai = require('chai')
    , sinon = require('sinon')
    , should = chai.should()
    , chai_as_promised = require('chai-as-promised')
    , Promise = require('bluebird');

chai.use(chai_as_promised);

describe('superbird.js', function () {

    it('should contain endAsync function', function(){
        return superbird.get('test_url').should.have.property('endAsync');
    });

    it('should contain cancellable function', function(){
        return superbird.get('test_url').should.have.property('cancellable');
    });

    it('should contain then function', function(){
        return superbird.get('test_url').should.have.property('then');
    });

});
