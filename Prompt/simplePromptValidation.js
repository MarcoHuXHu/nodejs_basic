 var prompt = require('prompt');
 
 var schema = {
    properties: {
      username: {
        pattern: /^[a-zA-Z\s\-]+$/,
        message: 'Name must be only letters, spaces, or dashes',
        required: true
      },
      password: {
        hidden: true
      }
    }
  };

  // Start prompt operation
  prompt.start();
 
  // Get two properties from the user: username and password 
  prompt.get(schema, function (err, result) {
  
    // Log the results to commandline console 
    console.log('Command-line input received:');
    console.log('  username: ' + result.username);
    console.log('  email: ' + result.password);
  });