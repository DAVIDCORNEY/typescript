function add(n1, n2, showResult, returnMessage) {
    var result = n1 + n2;
    if (showResult) {
        console.log(returnMessage + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 3;
var printResult = true;
var message = 'Result is ';
add(number1, number2, printResult, message);
