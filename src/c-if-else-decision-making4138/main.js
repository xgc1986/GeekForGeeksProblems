"use strict";

// https://www.geeksforgeeks.org/problems/c-if-else-decision-making4138/1
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
    for(;i<t;i++)
    {
        let N = parseInt(input.readLine());
        let obj = new Solution();
        let res = obj.compareFive(N);
        console.log(res);
    }
}

class Solution {
    /**
     * @param {number} N
     * @returns {string}
     */
    compareFive(N) {
        if (N > 5) {
            process.stdout.write("Greater than 5");
        } else if (N < 5) {
            process.stdout.write("Less than 5");
        } else {
            process.stdout.write("Equal to 5");
        }

        return '';
    }
}
