// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var len = cardNumber.length;
  var first = cardNumber.slice(0,1);
  var firstTwo = cardNumber.slice(0,2);

  if (['38', '39'].includes(firstTwo) && len === 14) {
  	return 'Diner\'s Club';
  }
  if (['34', '37'].includes(firstTwo) && len === 15) {
  	return 'American Express';
  }
  if (first === '4' && [13,16,19].includes(len)){
  	return 'Visa';
  }
  if (firstTwo >= 51 && firstTwo <= 55 && len === 16) {
  	return 'MasterCard';
  }

};


//Visa always has a prefix of 4 and a length of 13, 16, or 19.
//MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.