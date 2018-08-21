// spec.js
describe('Lambda-Protractor-Sample', function() {
  it('Test Cases', function() {
    browser.get('https://4dvanceboy.github.io/lambdatest/todo.html');
    expect(browser.getTitle()).toEqual('Todo App - CrossBrowserTesting.com');

    var todo = element(By.name('todo-4'))
    todo.click();

    todo = element(by.name('todo-5'))
    todo.click();

    var textbox = element(By.id("todotext"));

    textbox.sendKeys("Get Taste of Lambda and Stick to It");

    var addButton = element(By.id("addbutton"));
    addButton.click();

  });
});
