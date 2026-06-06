"use strict";
const PalinDromeNum = (num) => {
    if (num < 0) {
        return false;
    }
    let rev = 0;
    let temp = num;
    while (temp !== 0) {
        rev = (rev * 10) + (temp % 10);
        console.log(rev);
        temp = Math.floor(temp / 10);
        console.log(temp);
    }
    console.log(rev);
    if (rev !== num) {
        return false;
    }
    return true;
};
const x = 121;
console.log(PalinDromeNum(x));
