"use strict";

// https://www.geeksforgeeks.org/problems/sum-of-array2326/1
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
        let arr = input.readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        console.log(obj.sum(arr, n));
    }
}


class Solution {

    /**
     * @param {number[]} arr
     * @param {number} n
     * @return {number}
     */
    sum(arr, n) {
        return arr.reduce((acc, item) => acc + item, 0);
    }
}
