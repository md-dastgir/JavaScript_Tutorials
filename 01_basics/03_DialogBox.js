// 1. alert

alert("This is an alert msg.");   //no return any value.

//2. confirm

confirm("Enter your name");  //always return a value

const name = confirm("Enter your name here.");  // abc
console.log(name);      //  o/p => abc

// 3. prompt (it takes input from users)

prompt("Enter a number");       //always return a value

let n = prompt("Enter any number ");
for(let i=1; i<=n; i++){
    console.log(i);
}
