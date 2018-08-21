exports.config = {

  // change this to your USERNAME and AUTHKEY
  seleniumAddress: 'https://asad360logica:4b140c78-2f70-4e2b-a733-e556e02ecde9@ondemand.saucelabs.com:443/wd/hub',

  // add more browsers to this array for more parllel tests!!
  capabilities: {
    shardTestFiles: true,     // allows specs to be executed in parallel.
    maxInstances: 2,          // total number of specs that can be run at once.

    // Cloud capabilities
    name: 'Parallel Todo Sample',
    user: "asad360logica",
    password: "4b140c78-2f70-4e2b-a733-e556e02ecde9",
    record_video: 'true',
    record_network: 'true',

    // Device capabilities
    platform : 'Windows 7',
    browserName: 'Internet Explorer'

  },

  specs: ['./tests/*.js']     // notice this is now an array
};
