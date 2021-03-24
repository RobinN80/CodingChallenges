//Leetcode problem #1431
//Testcase worked, but was not accepted by leetcode 3/23 not sure why.

const candies = [4,2,1,1,2];
const extraCandies = 1;
let output = [];

var kidsWithCandies = function (candies, extraCandies) {
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
    } else {
      output.push(true);
      i++;
      j = 0;
      continue;
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
