function calculate(){
    let number1 = parseFloat(document.getElementById("num1").value);
    let number2 = parseFloat(document.getElementById("num2").value);
    let operator= document.getElementById("calc").value;
    let result;
    if(operator=="addition"){
        result = number1+number2;
    }
    else if(operator=="subtraction"){
        result = number1-number2;
    }
    else if(operator=="multiplication"){
        result = number1*number2;
    }
    else if(operator=="division"){
        result = number1/number2;
    }
    else{
        result = "Invalid operator";
    }
    document.getElementById("result").value = result;
}