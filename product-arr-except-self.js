"use strict";
const prodArrExceptSelf = (arr) => {
    const n = arr.length;
    const res = new Array(n).fill(1);
    console.log(res);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                res[i] *= arr[j];
            }
        }
    }
    console.log(res);
};
const a = [10, 3, 5, 6, 2];
prodArrExceptSelf(a);
