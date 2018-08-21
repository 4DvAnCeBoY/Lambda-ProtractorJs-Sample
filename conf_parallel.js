
exports.config = {

  // change this to your USERNAME and AUTHKEY
  seleniumAddress: 'https://asad360logica:4b140c78-2f70-4e2b-a733-e556e02ecde9@ondemand.saucelabs.com:443/wd/hub',

  // add more browsers to this array for more parllel tests!!
  multiCapabilities: [{
    'name': 'Protractor Parallel Example',
    'browserName': 'Chrome',      // Gets latest version by default
    'platform': 'Windows 10'      // To specify version, add 'version': 'desired version'
  }, {
    'name': 'Protractor Parallel Example',
    'browserName': 'Firefox',
    'platform': 'Windows 10'
  }],

  //
  specs: ['tests/spec.js']
};
