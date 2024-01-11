"use strict";

// https://www.geeksforgeeks.org/problems/print-1-to-n-without-using-loops-1587115620/1
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
        let obj = new Solution();
        obj.printNos(n);
    }
}

class Solution{

    /**
     * @param {number} n
     */
    printNos(n) {
        console.log(this.printNosRec(n));
    }

    printNosRec(n) {
        if (n === 1) {
            return '1';
        } else {
            return this.printNosRec(n - 1) + ` ${n}`;
        }
    }
}

