// Use the shorthand character class \W to count the number of non-aphanumeric characters in various quotes and strings

// Initialize a variable with a string as its value
let quoteSample = "The five boxing wizards jump quickly.";

// store ragex inside of a variable
let nonAlphabetRegex = /\W/

// call match method on our string and pass in our regex. Get the length
let result = quoteSample.match(nonAlphabetRegex).length;




