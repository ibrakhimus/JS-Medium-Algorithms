function reverseString(str) {
    let reversedString = "";
    for (let i  = 0; i < str.length; i++) {
        //this is how you loop thru every character in a string
        console.log(str[i]);
        reversedString = str[i] + reversedString;
}
    return reversedString;
}
console.log(reverseString("Ibra"));

//decrementing for loop
function reverseString(str) {
    reversedString = "";
    for (let i  = str.length - 1; i >= 0 ; i--) {
        reversedString += str[i]; //decremting loop better practice
}
    return reversedString;
}
console.log(reverseString("Ibra"));


//array has a reverse method

function reverseString(str) {
    return str.split("").reverse().join("");  //str.split turns a string into an array
                                            // reverse reverses the array, join turns it back into a string
}
console.log(reverseString("Ibra"));
