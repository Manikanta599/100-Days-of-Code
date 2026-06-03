

/**
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]

Output: true

Explanation:

The element 1 occurs at the indices 0 and 3.

*/


const ContainsDuplicates = (nums: number[]): boolean => {
    const numberOccurencesMap = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        if (numberOccurencesMap.has(nums[i])) {
            return true;
        }
        numberOccurencesMap.set(nums[i], 1);
    }

    return false;
}