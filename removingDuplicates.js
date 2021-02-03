const numArr = [1,1,1,2,2,1,3,3]

var removeDuplicates = function(nums) {
    const numsSorted = nums.sort();
    let i = 0;
    let j = 1;
    //let newArray = [];
    while (i < numsSorted.length && j < numsSorted.length){
        if(numsSorted[i] === numsSorted[j]){
            numsSorted.splice(j, 1);
        } else {
            //newArray.push(numsSorted[i]);
            i++;
            j++;
        }
    }
    return numsSorted;
};

console.log(removeDuplicates(numArr));