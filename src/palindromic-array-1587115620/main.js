"use strict";

// https://www.geeksforgeeks.org/problems/palindromic-array-1587115620/1
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
        let n = parseInt(input.readLine());
        let arr = input.readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.PalinArray(arr, n);
        console.log(res);

    }
}

class Solution {

    /**
     * @param {number[]} arr
     * @param {number} n
     * @return {number}
     */

    PalinArray(arr, n) {
        for (const item of arr) {
            if (!this.isPalindrome(`${item}`)) {
                return 0;
            }
        }

        return 1;
    }

    /**
     * @param {string} n
     * @returns {boolean}
     */
    isPalindrome(n) {
        for (let i = 0; i <= Math.ceil(n.length / 2); i++) {
            if (n[i] !== n[n.length - 1 - i]) {
                return false;
            }
            i++;
        }

        return true;
    }
}