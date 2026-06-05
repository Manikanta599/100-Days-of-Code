
const ContiguousSubArrSum = (arr: number[], target: number): boolean => {

    for (let i = 0; i < arr.length; i++) {
        let subArrSum = 0;
        for (let j = i; j < arr.length; j++) {
            subArrSum += arr[j];

            if (j - i + 1 >= 2 && subArrSum % target === 0) {
                return true;
            }

        }

    }
    return false;
}

const nums: number[] = [23, 2, 4, 6, 6];
const targetNum = 7;

const maxSumRes = ContiguousSubArrSum(nums, targetNum);

console.log(maxSumRes);