"use strict";
const prefixSumBruteForceApproach = (arr) => {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        let s = 0;
        for (let j = 0; j <= i; j++) {
            s += arr[j];
        }
        res.push(s);
    }
    console.log(res);
};
const prefixSum = (arr) => {
    const res = [];
    res[0] = arr[0];
    for (let i = 1; i < arr.length; i++) {
        res[i] = res[i - 1] + arr[i];
    }
    console.log(`oooooooo`, res);
};
const n = [30, 10, 10, 5, 50];
prefixSum(n);
prefixSumBruteForceApproach(n);
