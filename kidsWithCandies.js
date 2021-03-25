//Leetcode problem #1431
//Testcase worked, but was not accepted by leetcode 3/23 not sure why.
//Update passed leetcode 3/24 (moved output variable inside function).

const candies = [4,2,1,1,2];
const extraCandies = 1;


var kidsWithCandies = function (candies, extraCandies) {
  let output = [];
  let i = 0;
  let j = 0;
  while (i < candies.length) {
    if ((i === j)) j++;
    while (candies[i] + extraCandies >= candies[j] && j < candies.length) {
      j++;
    }
    if (candies[i] + extraCandies < candies[j]) {
      output.push(false);
      i++;
      j = 0;
    } else {
      output.push(true);
      i++;
      j = 0;
    }
  }
  return output;
};

// var kidsWithCandies = function(candies, extraCandies) {
//     for(let i= 0; i <= candies.length; i++ ){
//         const possibleCandies = candies[i] + extraCandies;
//         for (let j = 1; j <= candies.length; j++){
//             if(possibleCandies >= candies[j]){
//                 output.push(possibleCandies);
//                 break;
//             }
//             else{
//                 continue;
//             }
//         }
//     }
//     return output;
// };

console.log(kidsWithCandies(candies, extraCandies));
