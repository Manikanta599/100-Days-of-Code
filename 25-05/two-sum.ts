
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].



const TwoSum = (arr: number[], target: number) => {

    const arrNumAndIndex = new Map<number, number>();

    for (let i = 0; i < arr.length; i++) {
        const requiredNum = target - arr[i];
        if(arrNumAndIndex.has(requiredNum))
        {
            return [arrNumAndIndex.get(requiredNum), i];
        }

        arrNumAndIndex.set(arr[i],i);
    }
    return [];
}

const arr:number[] = [2,7,11,15];
const target:number = 9;
console.log(`cccccccccc`,TwoSum(arr,target));
const res = TwoSum(arr,target);
console.log(`resulttt`,res);