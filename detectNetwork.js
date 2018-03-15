// var _ = require('underscore');
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
  var firstTwo = cardNumber.slice(0,2);
  var firstThree = cardNumber.slice(0,3);
  var firstFour = cardNumber.slice(0,4);
  var firstSix = cardNumber.slice(0,6);
  var dinerPre = ['38','39'];
  var amerPre = ['34','37'];
  var visaPre = ['4'];
  var visaLength = [13,16,19]; //these are ints because they compare to .length
  var masterPre = ['51','52','53','54','55'];
  var discPre = ['6011', '644', '645', '646', '647', '648', '649', '65'];
  var maePre = ['5018', '5020', '5038', '6304'];
  //var chinaPre = range(622126, 622926);
  var chinaPre = [];
  for (var i = 622126; i <= 622926; i++) {
    chinaPre.push(i);
  }
  var chinaPre = chinaPre.concat([624,625,626]);
  var chinaPre = chinaPre.concat([6282, 6283, 6284, 6285, 6286, 6287, 6288]);
  var chinaPre = JSON.stringify(chinaPre);
  var switchPre = ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'];
  var discLength = [16, 19];
  var maeLength = [12, 13, 14, 15, 16, 17, 18, 19];
  var chinaLength = [16, 17, 18, 19];
  var switchLength = [16, 18, 19];
  if (dinerPre.includes(cardNumber.slice(0,2)) && (cardNumber.length === 14)) {
    return "Diner's Club";
  } else if (amerPre.includes(cardNumber.slice(0,2)) && (cardNumber.length === 15)) {
    return "American Express";
  } else if (visaPre.includes(cardNumber[0]) && visaLength.includes(cardNumber.length)) {
    return "Visa";
  } else if (masterPre.includes(cardNumber.slice(0,2)) && (cardNumber.length === 16)) {
    return "MasterCard";
  } else if ((discPre.includes(firstTwo) || discPre.includes(firstThree) || discPre.includes(firstFour)) && discLength.includes(cardNumber.length)) {
    return 'Discover';
  } else if (maePre.includes(firstFour) && maeLength.includes(cardNumber.length)) {
    return "Maestro";
  } else if ((chinaPre.includes(firstSix) || chinaPre.includes(firstThree) || chinaPre.includes(firstFour)) && chinaLength.includes(cardNumber.length)) {
    return "China UnionPay";
  } else if ((switchPre.includes(firstFour) || switchPre.includes(firstSix)) && (switchLength.includes(cardNumber.length))) {
    return "Switch";
  }
  //China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  //Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
};


