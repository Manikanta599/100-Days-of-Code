

const longestPalindrome = (s: string): string => {
    const charsInStr: string[] = [];

    for (const c of s) {
        charsInStr.push(c);
    }
    let longest = '';
    for (let i = 0; i < charsInStr.length; i++) {
        for (let j = i; j < charsInStr.length; j++) {
            const sub = s.slice(i, j + 1)
            // console.log(sub);
            if (checkIsPalin(sub)) {
                if (sub.length > longest.length) {
                    longest = sub;
                }
            }

        }
    }
    console.log(longest);
    return longest;
}


const checkIsPalin = (s: string): boolean => {
    let r = s.length - 1;
    let l = 0;
    const chars: string[] = [];
    for (const c of s) {
        chars.push(c);
    }

    while (l < r) {
        if (chars[l] !== chars[r]) {
            return false;
        }
        l++;
        r--;
    }
    return true;
}

const st = "babad";
longestPalindrome(st);