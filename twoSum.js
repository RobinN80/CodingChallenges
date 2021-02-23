// leetcode # 1  Two Sum

let nums = [2,3,4,5,6,7,8,9];
let target = 11;

var twoSum = function(nums, target) {
    //two pointer system
    //let i = 0;
    let j = 1;
    let output = [];
    
    for(let i = 0; i < nums.length; i++){
        for (j = i+1;  j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                output.push(i, j);
                return output;
            } 
        }
    }
    
    return output;
};

console.log(twoSum(nums, target));
