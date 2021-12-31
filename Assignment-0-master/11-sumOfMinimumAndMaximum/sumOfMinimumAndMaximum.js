function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  nums.sort((a,b)=>a-b)
  console.log(nums)
  return nums[0] + nums[nums.length-1]
  
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;