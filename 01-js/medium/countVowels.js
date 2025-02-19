/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let s = str.toLowerCase()
  let vowels = "aeiou"
  let count = 0;
  for(let i = 0; i<s.length; i++){
      for (let j= 0; j<vowels.length; j++){
          if(s[i] == vowels[j]){
              count += 1;
              break;
          }
      }
  }
  return count;
}

module.exports = countVowels;