'use strict';

describe('waiter-cooler homepage', function() {
    it('should have a title', function() {
        browser.get('http://localhost:8888/');
        expect(browser.getTitle()).toEqual('Big Angular App');
    });
    it('should have a welcome message', function() {
        browser.get('http://localhost:8888/');
        expect(browser.element(by.id('greeting')).getText()).toEqual('Hello David!');
    });
});
