 var prompt = require('prompt');
 
  // Start prompt operation
  prompt.start();
 
  // Get two properties from the user: username and password 
  prompt.get(['username', 'password'], function (err, result) {
  
    // Log the results to commandline console 
    console.log('Command-line input received:');
    console.log('  username: ' + result.username);
    console.log('  email: ' + result.password);
  });