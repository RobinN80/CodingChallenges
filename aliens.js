var isAlienSorted = function(words, order) {
    for(let i=1; i < words.length; i++){
     let leftWord = words[i-1];
     let rightWord = words[i];
     let longestWord = (words[i] > words[i-1]) ? words[i].length : words[i-1].length
     
         if (order.indexOf(leftWord[0]) < order.indexOf(rightWord[0])){
             continue;
         } else if (order.indexOf(leftWord[0]) > order.indexOf(rightWord[0])){
             return false;
             break;
         } else if (order.indexOf(leftWord[0]) = order.indexOf(rightWord[0])){
             for (let x = 1; x < longestWord; x++){
                 if (order.indexOf(leftWord[x]) < order.indexOf(rightWord[x])){
                     continue;
                 } else if (order.indexOf(leftWord[x]) > order.indexOf(rightWord[x])){
                     return false;
                     break;
                 } else if (order.indexOf(leftWord[x]) = order.indexOf(rightWord[x])){
                     continue;
                 }
             }   
         } else {
             return true;
         }; 
     } 
 };

 console.log(isAlienSorted(["hello","leetcode"], "hlabcdefgijkmnopqrstuvwxyz"));