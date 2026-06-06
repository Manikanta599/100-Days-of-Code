const PalinDromeNum = (num: number): boolean => {
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
}

const x = 121
console.log(PalinDromeNum(x));



const palinDromeNumByConvertingToStr = (num: number) => {
    if (num < 0) {
        return false;
    }
    const numStr = Math.abs(num)?.toString();
    const len = numStr.length;

    for (let i = 0; i < len / 2; i++) {
        if (numStr[i] !== numStr[len - i - 1]) {
            return false;
        }
    }
    return true;
}