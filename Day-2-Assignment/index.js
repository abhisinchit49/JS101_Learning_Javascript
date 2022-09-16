// ### Description

// - You have to take six numbers, stored in variables with the following names

//     ```
//      one, two, three, four, five, six
//     ```


// The value stored in the variable`two, five, six`has been doubled, such that if initially the value was 3, it has become 6

// The value stored in the variable`three, four`has been increased three times, such that if initially it was 3, it has become 9

// The value stored in the variable `one` has not been changed.

// Find the sum of the updated values stored in`one, two, three, four, five, six`

// ### Input

// The first and the only line of input contains the values stored in the variable`one, two, three, four, five, six`

// ### Output

// Find the sum of the updated values stored in`one, two, three, four, five, six`

// ### Sample Input

// ```jsx
// 1 2 3 4 5 6
// ```

// ### Sample Output

// ```jsx
// 48
// ```our

// ### Hint

// In the sample test case, the value stored in`one = 1, two =2, three = 3, four = 4, five = 5, six = 6`

// After updating the values, the values stored become`one = 1, two = 4, three = 9 , four = 12, five = 10, six = 12`

// Adding the updated values the sum becomes`1 + 4 + 9 + 12 + 10 + 12 = 48`, which is the required answer

let one = 1;
let two = 2;
let three = 3;
let four = 4;
let five = 5;
let six = 6;

let double=((two+five+six)*2)
let triple=((three+four)*3)
let sum=(double+triple+one)
console.log(sum);



