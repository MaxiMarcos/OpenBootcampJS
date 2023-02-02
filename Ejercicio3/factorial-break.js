let factorial = 1;
let num = 10;

while (factorial) {

    if (num != 0) {
        factorial *= num;
        num--;
    } else {
        break;
    }

}

console.log(factorial);