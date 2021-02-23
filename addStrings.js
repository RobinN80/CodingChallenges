//leetcode problem # ??
//Solution did not work b/c of Number.MAX_SAFE_INTEGER

const string1 = '123';
const string2 = '456';

//expected outcome 579

let arr1 = [];
let arr2 = []

let sum1 = 0;
let sum2 = 0;

function string1AsInt(arr1){
    arr1 = string1.split('');
    arr1.reverse();
    console.log(arr1);
    for (let i=0 ; i < arr1.length; i++){
        sum1 = sum1 + (arr1[i] * Math.pow(10, i));
    };

    return sum1;
}



function string2AsInt(arr2){
    arr2 = string2.split('');
    arr2.reverse();
    console.log(arr2);
    for (let i=0 ; i < arr2.length; i++){
        sum2 = sum2 + (arr2[i] * Math.pow(10, i));
    };

    return sum2;
}

function addStrings(sum1, sum2){
    return sum1 + sum2
}


console.log("string 1 as int:", string1AsInt(arr1));
console.log("string 2 as int:", string2AsInt(arr2));
console.log('addStrings:', addStrings(sum1, sum2));
console.log(Number.MAX_SAFE_INTEGER);

