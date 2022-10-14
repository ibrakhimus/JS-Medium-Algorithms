function filterOutFalsy(arr) {
    let TruthyArr = [];
    for(let i = 0; i < arr.length; ++i) {
        if (!!arr[i] === true) {
            TruthyArr.push(arr[i])
        }
    }
    return TruthyArr;
}

console.log(filterOutFalsy(["Banana", "Orange", "Apple", NaN, 0]));

function filterOutFalsy(arr) {
    return arr.filter(elem => !!elem === true);
}

console.log(filterOutFalsy(["Banana", "Orange", "Apple", NaN, 0]));