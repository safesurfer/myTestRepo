var assert = require('chai').assert;
var app = require('../app');

describe('App', function () {
    it('sayHello should return hello', function(){
        let result = app.sayHello();
        assert.equal(result, 'hello');
    });
    it('addNumbers should return above 5', function(){
        let result = app.addNumbers(5,5);
        assert.isAbove(result, 5);
    });
});