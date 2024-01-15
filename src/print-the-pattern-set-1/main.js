"use strict";

// https://www.geeksforgeeks.org/problems/print-the-pattern-set-1/1
// 2023-08-31T05:48:35.000Z

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

        let obj = new Solution();
        obj.printPat(n);
    }

}

class Solution {

    /**
     * @param {number} n
     */
    printPat(n) {
        const ret = [];
        for (let i = 0; i < n; i++) {
            ret.push([]);
        }

        for (let num = n; num > 0; num--) {
            for (let row = 0; row < n; row++) {
                for (let times = 0; times < n - row; times++) {
                    ret[row].push(num);
                }
            }
        }

        for (let i = 0; i < ret.length; i++) {
            process.stdout.write(ret[i].join(' ') + ' $');
        }
        console.log();
    }
}