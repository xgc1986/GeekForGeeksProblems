"use strict";

// https://www.geeksforgeeks.org/problems/sum-of-series2811/1
// 2023-08-31T05:58:07.000Z

/**
 * @param {{
 *     readLine: () => string,
 *     printList: (res: any[], n: number) => void
 * }} input
 */
export default function main(input) {
    let t = parseInt(input.readLine());
    for (let i = 0; i < t; i++) {
        let n = parseInt(input.readLine());
        let obj = new Solution();
        console.log(obj.seriesSum(n));
    }
}

class Solution {

    /**
     * @param {number} n
     * @returns {number}
     */
    seriesSum(n) {
        return ((n + 1) * n) / 2;
    }
}
