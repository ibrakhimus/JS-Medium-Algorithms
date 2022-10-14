function convertToZeroes(arr) {
    let zeroes = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] = 0;
}
    return arr;
}


console.log(convertToZeroes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// array fill
function convertToZeroes(arr) {
    return new Array(arr.length).fill(0)
}


console.log(convertToZeroes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function convertToZeroes(arr) {
    return arr.map(elem => 0);   
    //arrow function has an invisible return, if you're using curly braces, you need to explicitly return
    //map converts every single element in the array to the right hand side of the arrow function
}


console.log(convertToZeroes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

