"use strict";

// https://www.geeksforgeeks.org/problems/find-maximum-value/1
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
        let arr = new Array(n);
        let input_ar1 = input.readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++) {
            arr[i] = input_ar1[i];
        }
        let obj = new Solution();
        let res = obj.max_val(arr, n);
        console.log(res);

    }
}


class Solution {

    /**
     * @param {number[]} arr
     * @param {number} n
     * @returns {number}
     */
    max_val(arr, n) {
        let max = -Infinity;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] < 0) {
                continue;
            }
            for (let j = i; j < n; j++) {
                if (arr[j] < 0) {
                    continue;
                }
                max = Math.max(max, Math.abs(i - j) * Math.min(arr[i], arr[j]));
            }
        }

        return max;
    }
}
