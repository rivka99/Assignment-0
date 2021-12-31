function sumOfAllEvenNumbers(nums) {
  // Insert code here;
  let holdNums = 0
  for(let i=0; i<nums.length; i++){
    if(nums[i]%2 === 0){
      holdNums++
    }
  }
  return holdNums;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;