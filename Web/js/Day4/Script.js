// let name="sai";
// let age=22;
// let isStudent=true;
// let hobbies=["coding","reading","traveling"];
// let address={
//     street:"123 Main St",
//     city:"Anytown",
//     country:"USA"
// };
// let nothing=null;
// let undefinedVariable;

// console.log("Name:", name); 
// console.log("Age:", age);
// console.log("Is Student:", isStudent);
// console.log("Hobbies:", hobbies);
// console.log("Address:", address);
// console.log("Nothing:", nothing);
// console.log("Undefined Variable:", undefinedVariable);

// let a=10;
// let b=20;
// let sum=a+b;
// console.log("Sum:",sum);

// let subtract=a-b;
// console.log("Subtraction:",subtract);

// let multiply=a*b;
// console.log("Multiplication:",multiply);

// let divide=a/b;
// console.log("Division:",divide);

// let modulus=a%b;
// console.log("Modulus:",modulus);

// let exponentiation=a**2;
// console.log("Exponentiation:",exponentiation);

// let increment=a++;
// console.log("Increment:",increment);

// let decrement=b--;
// console.log("Decrement:",decrement);

// let isEqual=a==b;
// console.log("Is Equal:",isEqual);

// let isNotEqual=a!=b;
// console.log("Is Not Equal:",isNotEqual);

// let isGreater=a>b;
// console.log("Is Greater:",isGreater);

// let isLess=a<b;
// console.log("Is Less:",isLess);
// a=4;
// console.log(a);

// Day="Monday";
// if(Day=="Monday"){
//     console.log("Today is Monday");
// }
// else if(Day=="Tuesday"){
//     console.log("Today is Tuesday");
// }
// else if(Day=="Wednesday"){
//     console.log("Today is Wednesday");
// }
// else if(Day=="Thursday"){
//     console.log("Today is Thursday");
// } 
// else if(Day=="Friday"){
//     console.log("Today is Friday");
// }
// else if(Day=="Saturday"){
//     console.log("Today is Saturday");
// }
// else if(Day=="Sunday"){
//     console.log("Today is Sunday");
// }
// else{
//     console.log("Invalid Day");
// }  

// var marks=85;
// if(marks>=75){
//     console.log("Grade: A");
// }
// else if(marks>=60){
//     console.log("Grade: B");
// }
// else if(marks>=40){
//     console.log("Grade: C");
// }
// else if(marks<40){
//     console.log("Fail");
// }
// else{
//     console.log("Invalid Marks");
// }


// let profile={
//     name:"sai",
//     age:22,
//     address:"ongole",
//     date_of_birth:"2003-11-01",
//     pic:"../images/sai.jpg"
// };
// console.log("Profile:",profile);
// console.log("Name:",profile.name);
// console.log("Age:",profile.age);
// console.log("Address:",profile.address);
// console.log("Date of Birth:",profile.date_of_birth);
// console.log("Picture:",profile.pic);

// function log(message){
//     console.log(message);
// }
// log("my name is "+profile.name+" and i am "+profile.age+" years old. i live in "+profile.address+" and my date of birth is "+profile.date_of_birth+". here is my picture: "+profile.pic);

// function CalulateArea(radius){
//     let area=Math.PI*radius*radius;
//     return area;
// }
// let radius=5;
// let area=CalulateArea(radius);
// console.log("Area of Circle with radius "+radius+" is: "+area);



// let price=4000;
// if(price>=5000){
//     console.log(price-price*0.2);
// }
// else if(price>=3000){
//     console.log(price-price*0.1);
// }
// else if(price<3000){
//     console.log("You are not eligible for a discount.");
// }
// else{
//     console.log("Invalid Price");
// }

// var grade = 'a';
// switch (grade) {
//     case 'a':
//         console.log("Excellent");
//         break;
//     case 'b':
//         console.log("Good");
//         break;
//     case 'c':
//         console.log("Average");
//         break;
//     default:
//         console.log("Invalid Grade");
// }

// var signal = 'yellow';
// switch (signal) {
//     case 'red':
//         console.log("Stop");
//         break;
//     case 'yellow':
//         console.log("Caution");
//         break;

//     case 'green':
//         console.log("Go");
//         break;

//     default:
//         console.log("Invalid Signal");
// }

// var name="sai";
// let count =name.length;
// console.log("Length of the name:",count);

// for(let i=0;i<count;i++){
//     console.log("i love u "+name);
// }

// let num = 10;

// for(let i=1;i<=num;i++){
//     var value = i>0?console.log(i+" positive ")&&i%2==0?console.log(i+" even "):console.log(i+" odd "):console.log(i+" negative ")&&i%2==0?console.log(i+" even "):console.log(i+" odd ");
// }

let marks = 82;  

let grade;

if (marks >= 90) {
    grade = "A";
} 
else if (marks >= 75) {
    grade = "B";
} 
else if (marks >= 60) {
    grade = "C";
} 
else if (marks >= 40) {
    grade = "D";
} 
else {
    grade = "F";
}

console.log("Grade: " + grade);

let result = (marks >= 40) ? "Pass" : "Fail";

console.log("Result: " + result);





























