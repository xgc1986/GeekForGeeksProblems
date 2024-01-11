"use strict";

// https://www.geeksforgeeks.org/problems/value-equal-to-index-value1330/1
// 2023-12-03T16:00:08.000Z

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
        let input_ar1 = input.readLine().split(' ').map(x => parseInt(x));
        let n = input_ar1[0];
        let arr = new Array(n);
        input_ar1 = input.readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++) {
            arr[i] = input_ar1[i];
        }
        let obj = new Solution();
        let res = obj.valueEqualToIndex(arr, n);
        input.printList(res, res.length);
    }
}

class Solution {

    /**
     * @param {number[]} arr
     * @param {number} n
     * @returns {number[]} arr
     */
    valueEqualToIndex(arr, n) {
        const ret = [];
        for (let i = 0; i < n; i++) {
            if (arr[i] === i + 1) {
                ret.push(i + 1);
            }
        }

        return ret;
    }
}
