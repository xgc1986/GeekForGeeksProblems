"use strict";

// https://www.geeksforgeeks.org/problems/check-for-binary/1
// 2023-08-31T05:58:07.000Z

/**
 * @param {{
 *     readLine: () => string,
 *     printList: (res: any[], n: number) => void
 * }} input
 */
export default function main(input) {
    let t = parseInt(input.readLine());
    let i = 0;
    for (; i < t; i++) {
        let str = input.readLine();
        let obj = new Solution();
        let res = obj.isBinary(str);
        if (res === true) {
            console.log(1);
        } else {
            console.log(0);
        }

    }
}

class Solution {

    /**
     * @param {string} str
     * @returns {boolean}
     */
    isBinary(str) {
        for (const c of str) {
            if (c !== '0' && c !== '1') {
                return false;
            }
        }

        return true;
    }
}

