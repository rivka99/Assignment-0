function countOfAllIndexMatchingNumbers(nums) {
  // Insert code here;
  let holdNums = 0
  for(let i=0; i<nums.length; i++){
    if(nums[i]===i){
      holdNums++
    }
  }
  return holdNums
}


// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;