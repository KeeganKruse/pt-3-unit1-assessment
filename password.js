const readline = require('readline');
const { ReadableStreamBYOBRequest } = require('stream/web');
const { callbackify } = require('util');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Hello there! Please enter your password: ", function(input){
	tokens = input.split(' ');
	
	userPassword = tokens[0];
	
    console.log('User Password is:', userPassword);

       if(userPassword >= 10 && userPassword < 32)
        console.log('Your password is good!') 
        else 
        console.log('Your password must be between 10 and 32 characters long')

    

	// This line closes the connection to the command line interface.
	reader.close()

});
