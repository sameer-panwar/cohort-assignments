/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  if(str.length === 0){
    return true;
  }
  newStr=str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let n= newStr.length;
  
  for(let i=0; i<n/2; i++){
    if(newStr[i] !== newStr[n-1-i]){
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
