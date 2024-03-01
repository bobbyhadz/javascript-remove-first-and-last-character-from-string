// EXAMPLE 1 - Remove First and Last Characters from a String in JavaScript

const str = 'abcd';

const withoutFirstAndLast = str.slice(1, -1);
console.log(withoutFirstAndLast); // 👉️ bc

// ------------------------------------------------------------------

// // EXAMPLE 2 - Remove First and Last Characters from a String using String.substring()

// const str = 'abcd';

// const withoutFirstAndLast = str.substring(1, str.length - 1);
// console.log(withoutFirstAndLast); // 👉️ bc
