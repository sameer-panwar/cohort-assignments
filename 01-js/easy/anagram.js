/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length !== str2.length){
    return false;
  }
  str1=str1.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');
  str2=str2.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');
  return str1 === str2;
}

module.exports = isAnagram;
