"use strict";

// https://www.geeksforgeeks.org/problems/find-duplicate-rows-in-a-binary-matrix/1
// 2023-12-26T07:16:33.000Z

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
        let [N, M] = input.readLine().trim().split(" ").map((X) => parseInt(X));
        let Matrix = [];
        for (let j = 0; j < N; j++) {
            let inputLine = input.readLine().trim().split(" ").map((X) => parseInt(X));
            Matrix.push(inputLine);
        }
        let obj = new Solution();
        let res = obj.repeatedRows(Matrix, M, N);
        let s = "";
        for (let j = 0; j < res.length; j++)
            s = s + res[j] + " ";
        console.log(s);
    }
}

class Solution {

    /**
     * @param {number[][]} Matrix
     * @param {number} M
     * @param {number} N
     * @return {number[]}
     */
    repeatedRows(Matrix, M, N) {
        const founds = {};
        const ret = [];

        for (let r = 0; r < Matrix.length; r++) {
            const row = Matrix[r];
            const str = row.join("");
            if (founds[str]) {
                ret.push(r);
            } else {
                founds[str] = true;
            }
        }

        return ret;
    }
}