class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    let holdLength = nums.length
    let high = holdLength
    let low = 0
    let mid = Math.floor((high-1)/2)
    if(low>high){
      return false
    } else if(low<high && nums[mid] === target){
      return true
    } else if(low<high && nums[mid] > target){
      high = mid-1
      return binarySearch(nums.slice(low,high),target)
    } else if(low<high && nums[mid] < target){
      low = mid + 1
      return binarySearch(nums.slice(low,high),target)
    } else{
      return false 
    }

  }
}





// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;