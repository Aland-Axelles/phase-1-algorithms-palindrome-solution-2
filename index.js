function isPalindrome(word) {
    word = word.replace(/[^a-z]/g, '').toLowerCase();
    let left = 0;
    let right = word.length - 1;
    while (left < right) {
      if (word[left] !== word[right]) {
        return false; 
      }
      left++;
      right--;
    }
    return true; 
  }
  
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;