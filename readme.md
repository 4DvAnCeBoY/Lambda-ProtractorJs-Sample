# Getting Started with Protractor and CrossBrowserTesting

## Setup
Use npm to install Protractor globally with:

`npm install -g protractor` <br>

This will install two command line tools, protractor and webdriver-manager. Try running protractor --version to make sure it's working.

The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with:

`webdriver-manager update`

Now start up a server with:

`webdriver-manager start`

This will start up a Selenium Server and will output a bunch of info logs. 

##Configuration

Now create the configuration file. Copy the following into conf.js:

`exports.config = {
  seleniumAddress: 'hub url',
  specs: ['todo-spec.js']
};`

This configuration tells Protractor where your test files (specs) are, and where to talk to your Selenium Server (seleniumAddress). It will use the defaults for all other configuration. Chrome is the default browser.

##Run the test

Now run the test with:

`protractor conf.js`

You should see a Chrome browser window open up and navigate to the todo list in the AngularJS page, then close itself (this should be very fast!). The test output should be 1 test, 3 assertions, 0 failures. Congratulations, you've run your first Protractor test!
