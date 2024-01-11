"use strict";

// https://www.geeksforgeeks.org/problems/find-the-median0527/1
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
        let res = obj.find_median(arr);
        console.log(res);
    }
}

class Solution {

    /**
     * @param {number[]} arr
     * @return {number}
     */
    find_median(arr) {
        arr.sort((a, b) => (a - b));

        if (arr.length % 2 === 0) {
            return ((arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2) | 0;
        } else {
            return arr[Math.floor(arr.length / 2)];
        }
    }
}