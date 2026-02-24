// let arr = [1, 2, 3, 4, 5];

// let arrMap = arr.map(function(num) {
//     return num * 2;
// });

// console.log(arrMap);

// let arrFilter = arr.filter(function(num) {
//     return num % 2 === 0;
// });

// console.log(arrFilter);

// let arrReduce = arr.reduce(function(accumulator, currentValue) {
//     return accumulator + currentValue;
// }, 0);

// console.log(arrReduce);

// let arrFind = arr.find(function(num) {
//     return num > 3;
// });

// console.log(arrFind);

// arr.push(6);
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.unshift(0);
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.splice(2, 1);
// console.log(arr,"split");

// arr.slice(1, 2);
// console.log(arr.splice(1, 2),"slice");


// let arr= [1, 2, 3, 4, 5];
// let sum=0;
// arr.forEach(element => {
//     sum += element;
// });
// console.log("total sum is "+sum);

// let avg = sum / arr.length;
// console.log("average is "+avg);







// const marks = [78, 85, 62, 90, 55];

// const normalizedMarks = marks.map(mark => Number(mark));

// const calculateTotal = arr =>
//   arr.reduce((total, mark) => total + mark, 0);

// const calculateAverage = arr =>
//   arr.length ? calculateTotal(arr) / arr.length : 0;


// const getResult = average =>
//   average >= 40 ? "Pass" : "Fail";


// const total = calculateTotal(normalizedMarks);
// const average = calculateAverage(normalizedMarks);
// const result = getResult(average);

// console.log(`
// 📊 Student Marks Analysis
// -------------------------
// Marks       : ${normalizedMarks.join(", ")}
// Total Marks : ${total}
// Average     : ${average.toFixed(2)}
// Result      : ${result}
// `);


import {sum, multiply} from "./module.js";

console.log("Sum of 5 and 3 is: " + sum(5, 3));
console.log("Product of 5 and 3 is: " + multiply(5, 3));










