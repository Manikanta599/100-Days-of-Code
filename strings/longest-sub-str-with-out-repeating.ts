/**
 * 3. Longest Substring Without Repeating Characters
 * 
 * Given a string s, find the length of the longest substring without duplicate characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 
 */


const lengthOfLongestSubstring = (str: string): number => {
    if (!str) {
        return 0;
    }

    const charsInStr: string[] = [];

    for (const c of str) {
        charsInStr.push(c);
    }
    console.log(charsInStr);
    let maxL = 0;
    for (let i = 0; i < charsInStr.length; i++) {
        for (let j = i; j < charsInStr.length; j++) {
            const s = str.slice(i, j + 1);
            console.log(s);
            if (_uniqueCheck(s)) {
                maxL = s.length > maxL ? s.length : maxL;
            }
        }
    }

    return maxL;
}

//for checking string contains duplicaes or not
const _uniqueCheck = (s: string) => {
    const charsSet = new Set<string>();
    for (const ch of s) {
        if (charsSet.has(ch)) {
            return false;
        }
        charsSet.add(ch);
    }
    return true
}


const s = "pwwkew";
console.log(lengthOfLongestSubstring(s));