describe('waiter-cooler homepage', function() {
  it('should have a title', function() {
    browser.driver.get('http://localhost:8888/');

    expect(browser.driver.getTitle()).toEqual('Big Angular App');
  });
});
