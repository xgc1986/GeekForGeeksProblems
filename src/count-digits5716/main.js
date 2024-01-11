"use strict";

// https://www.geeksforgeeks.org/problems/count-digits5716/1
// 2023-11-10T07:31:48.000Z

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
        let N = parseInt(input.readLine());
        let obj = new Solution();
        let res = obj.evenlyDivides(N);
        console.log(res);
    }
}

class Solution {
    /**
     * @param {number} n
     * @returns {number}
     */
    evenlyDivides(n) {
        let total = 0;
        let current = n;

        while (current > 0) {
            if (n % (current % 10) === 0) {
                total++;
            }

            current = (current / 10) | 0;
        }

        return total;
    }
}
