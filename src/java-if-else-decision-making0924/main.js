"use strict";

// https://www.geeksforgeeks.org/problems/java-if-else-decision-making0924/1
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
        let [n, m] = input.readLine().trim().split(" ").map((x) => parseInt(x));

        let obj = new Solution();
        let res = obj.compareNM(n, m);
        console.log(res);
    }
}

class Solution {

    /**
     * @param {number} n
     * @param {number} m
     * @returns {string}
     */
    compareNM(n, m) {
        if (n > m) {
            return "greater";
        } else if (n < m) {
            return "lesser";
        } else {
            return "equal";
        }
    }
}
