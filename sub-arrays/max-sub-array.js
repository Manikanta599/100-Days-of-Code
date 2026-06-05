"use strict";
const maxSubArraysun = (arr) => {
    let maxum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            // const subarray = arr.slice(i, j + 1);
            // console.log(subarray);
            let _s = 0;
            for (let k = i; k <= j; k++) {
                _s += arr[k];
            }
            if (_s > maxum) {
                maxum = _s;
            }
        }
    }
    console.log(maxum);
    return maxum;
};
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 44];
maxSubArraysun(arr);
