function add(n1: number,n2: number, showResult: boolean, returnMessage: string) {
    const result = n1 + n2;
    if (showResult) {
        console.log(returnMessage + result);
    } else {
        return result;
    }
}

const number1 = 5;
const number2 = 3;
const printResult = true;
const message = 'Result is ';

add(number1, number2, printResult, message);

