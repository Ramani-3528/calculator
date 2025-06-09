function calculate(){
    let number1 = parseFloat(document.getElementById("num1").value);
    let number2 = parseFloat(document.getElementById("num2").value);
    let operator= document.getElementById("cal").value;
    let result;
    switch (operator){
        case "addition":
            result = number1+number2;
            break;
        case "subtraction":
            result = number1-number2;
            break;
        case "multipilication":
            result = number1*number2;
            break;
        case "division":
            result = number1/number2;
            break;
        default:
            result = "Invalid Operator"
    }
    document.getElementById("result").value = result;
}