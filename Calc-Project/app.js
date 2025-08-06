var result = document.getElementById("result");
var para = document.getElementById("para");
function input(num){
    
    // result.value = num;   => Override of number
    result.value += num;    // add next num after pervious num
}

function calc(){
    var output = eval(result.value);
    result.value = output;
}

function cancel(){
    result.value = "";
}
function even(){
    var num = result.value;
    if(num % 2 == 0){
        para.innerHTML = "Even Number";
        para.style.color = "dodgerblue";
        result.value = "";
    } else{
        para.innerHTML = "This is not an Even Number";
        para.style.color = "red";
        result.value = "";
    }
}
function odd(){
    var num = result.value;
    if(num % 2 != 0){
        para.innerHTML = "Odd Number";
        para.style.color = "dodgerblue";
        result.value = "";
    } else{
        para.innerHTML = "This is not an Odd Number";
        para.style.color = "red";
        result.value = "";
    }
}