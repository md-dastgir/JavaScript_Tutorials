let score = "33";

console.log(typeof score);
console.log(typeof (score));

let convert = Number(score);

console.log(typeof convert);

console.log(convert);


/*

"33" => 33
"33abc" => NaN
true => 1, false => 0
1 => true, 0 => false
"" (Empty string) => false
" " (Not Empty string) => true
*/



/*

prefix and postfix

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

*/