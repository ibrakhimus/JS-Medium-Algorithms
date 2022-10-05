function arrSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; ++i) {
        //this is how you loop thru every element in an array
        sum = sum + arr[i];
    }
    return sum;
}

console.log(arrSum([2, 2, 2]));