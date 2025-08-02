/*
    Conditional Statements
    1. if-else
    2. else-if
    3. switch
*/

// if-else

let n = 20;

if(n>=18){
    console.log("You can Vote.");
} else{
    console.log("You can not Vote.");
}


// else-if

let marks = 90;

if(marks >= 85){
    console.log("A+");
} else if(marks >=70){
    console.log("B+");
} else if(marks >=50){
    console.log("C+");
} else{
    console.log("D");
}


// switch

let Day = prompt("Enter any NUmbers between 1 to 7");

switch (Day) {
    case 1: console.log("Sunday"); 
        break;
    case 2: console.log("Monday"); 
        break;
    case 3: console.log("Tuesday"); 
        break;
    case 4: console.log("Wednesday"); 
        break;
    case 5: console.log("Thursday"); 
        break;
    case 6: console.log("Frtiday"); 
        break;
    case 7: console.log("Saturday"); 
        break;
    default: console.log("Invalide Inputs.");
        break;
}