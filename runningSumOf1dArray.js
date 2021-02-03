let nums = [1,2,3,4]

//expect output to be [1,3,6,10]

var runningSum = function(nums) {
    let newNums = [];
    let currentSum = null;
    for (let i= 0; i < nums.length; i++){
        if(i === 0){
            currentSum =  nums[0];
        } else {
            currentSum = nums[i] + newNums[i-1];
        }
        newNums.push(currentSum); 
    }
    return newNums;
};

console.log("output:", runningSum(nums));