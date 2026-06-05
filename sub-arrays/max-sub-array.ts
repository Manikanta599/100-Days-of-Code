
const maxSubArraysun = (arr: number[]): number => {
    let maxSum = 0;
    let currentMaxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        currentMaxSum = currentMaxSum > currentMaxSum + arr[i] ? currentMaxSum : arr[i];
        maxSum = maxSum > currentMaxSum ? maxSum : currentMaxSum;
    }
    return maxSum;
}


const arr: number[] = [-2, 1, -3, 4, -1, 2, 1, -5, 44];
maxSubArraysun(arr);