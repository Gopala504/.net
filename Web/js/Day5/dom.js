// name=" ";
// var name;
// if (name) {
//     console.log("it runs");
// }else {
//     console.log("it does not run");
// }

// let obj = {
//     name:"sai",
//     age: 22,
//     city: "hyd",
//     fun : function(name) {
//         return("Hello "+ this.name);
//     }
// }

// console.log(obj.fun());

// function display() {
//     let nameValue = document.getElementById("nameInput").value;
//     document.getElementById("message").innerText = "Welcome " + nameValue;
//     document.getElementById("greeting").innerText = "this the greeting message "+ nameValue;
// }

// let userInfo ={
//         name: "sai",
//         age: 22,
//         city: "hyd"
// };

// function display() {
//     let name = userInfo.name;
//     let age = userInfo.age;
//     let city = userInfo.city;

//     const outputDiv = document.getElementById("userInfo");

//     outputDiv.innerHTML = "";

//     let p1 = document.createElement("p");
//     p1.innerText = "Name: " + name;
//     outputDiv.appendChild(p1);
//     let p2 = document.createElement("p");
//     p2.innerText = "Age: " + age;
//     outputDiv.appendChild(p2);
//     let p3 = document.createElement("p");
//     p3.innerText = "City: " + city;
//     outputDiv.appendChild(p3);
// }
    

let count=0;

let countElement = document.getElementById("counter");
let incrementButton = document.getElementById("increment");
let decrementButton = document.getElementById("decrement");

function updateCounter() {
    count= count + 1;
    countElement.innerText = count;
}

function resetCounter() {   
     count = 0;
    countElement.innerText = count;
}

incrementButton.addEventListener("click", updateCounter);
decrementButton.addEventListener("click", resetCounter);