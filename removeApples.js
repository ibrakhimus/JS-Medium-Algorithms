function removeApples(arr) {
    let noApples = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 'Apple') {
            noApples.push(arr[i]); //push adds an element to the array
        }
}
return noApples;
}

console.log(removeApples(["Banana", "Orange", "Apple"]));



function removeApples(arr) {
    return arr.filter(elem => elem !== "Apple"); // if element is not equal to apple it will remove it
}

console.log(removeApples(["Banana", "Orange", "Apple"]));