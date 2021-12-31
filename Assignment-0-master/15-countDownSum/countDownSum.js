class MySolution {
  countDownSum(num) {
    // Insert code here;
    holdSum = 0
    for(let i=num; i>=0; i--){
      holdSum += i
    }
    return holdSum

  }
}


// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;