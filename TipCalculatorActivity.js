// Create a variable that holds the total amount of the bill (before the tip).
let TotalBill = x
// Create a function named 'calculateTip' ( It should multiply the bill variable by 20% of the total and return that value)
// -Takes in an amount as an argument, when calling the function, use the variable from above.
function calculateTip (x, y) {
    let y = .2;
    return x * y;
}
console.log(calculateTip(150)); // returns the calculated tip, 30.

// Create another function called 'getBillTotal' and it should do the following things:
// - Take any amount as an argument
// - call the 'calculateTip' function
// - return the amount + the tip amount
function getBillTotal (x, y) {
    let calculateTip = y;
    return x + y ;
}
console.log(getBillTotal()); // returns the calculated Bill Total, 180
// Console log each function and state what it is returning.

