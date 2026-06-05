"use strict";
const ContiguousSubArrSum = (arr, target) => {
    let maxSum = arr[0];
    let currentSum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        currentSum = currentSum > currentSum + arr[i] ? currentSum : currentSum + arr[i];
        maxSum = maxSum > currentSum ? maxSum : currentSum;
    }
    if (maxSum % targetNum === 0) {
        return true;
    }
    console.log(maxSum);
    return false;
};
const nums = [23, 2, 4, 6, 6];
const targetNum = 7;
const maxSumRes = ContiguousSubArrSum(nums, targetNum);
console.log(maxSumRes);
