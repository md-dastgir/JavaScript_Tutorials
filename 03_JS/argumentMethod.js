// String method with Argument

let msg = "ILoveCoding";

// 1. indexOf()
console.log(msg.indexOf("Love"));
console.log(msg.indexOf("o"));
console.log(msg.indexOf("Cod"));

// 2. slice(start, end)

console.log(msg.slice(5));
console.log(msg.slice(1, 4));
console.log(msg.slice(-3));


// 3. replace(presentValue, insertValue)

console.log(msg.replace("Love", "do"));
console.log(msg.replace("i", "e"));

// 4. repeat(num) => makes copies of num

console.log(msg.repeat(3));     // o/p => ILoveCodingILoveCodingILoveCoding
