function isPalindrome(word) {
  // Insert code here;
  if(word.length === 0){
    return true
  } else if(word.charAt(0)!=word.charAt(word.length-1)){
    return false
  }else{
    return isPalindrome(word.slice(1,word.length-1))
  }
}


// Do not edit this line;
module.exports = isPalindrome;