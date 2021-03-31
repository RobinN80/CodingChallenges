// Simple Javascript Excercise from Code With Mosh Javascript Basic Ex 2

// Basic
// function isLandscape(width, height) {
//     if(width > height) return true;
//     else return false;
// }

//Simplier
// isLandscape = (width, height) => {
//    return width > height ? true : false;
// }


//Even simplier 
isLandscape = (width, height) => {
    return (width > height);
}

console.log(isLandscape(7,7));