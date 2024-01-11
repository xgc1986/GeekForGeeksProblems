"use strict";

// https://www.geeksforgeeks.org/problems/print-alternate-elements-of-an-array/1
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
        let arr = input.readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        obj.print(arr, n);
    }

}

class Solution {

    /**
     * @param {number[]} arr
     * @param {number} n
     */
    print(arr, n) {
        const list = [];
        for (let i = 0; i < n; i += 2) {
            list.push(arr[i]);
        }

        console.log(list.join(' '));
    }
}

