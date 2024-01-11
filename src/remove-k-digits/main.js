"use strict";

// https://www.geeksforgeeks.org/problems/remove-k-digits/1
// 2024-01-11T07:03:27.000Z

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
        let s = input.readLine();
        let k = parseInt(input.readLine());
        let obj = new Solution();
        let res = obj.removeKdigits(s, k);
        console.log(res);
    }
}

class Solution {

    /**
     * @param {string} s
     * @param {number} k
     * @returns {string}
     */
    removeKdigits(s, k) {
        let res = this.removeKdigitsRec(s, k);
        let res2 = '';
        for (const c of res) {
            if (c !== '0') {
                res2 += c;
            }
            if (c === '0' && res2.length > 0) {
                res2 += c;
            }
        }

        if (res2 === '') {
            return '0';
        }

        return res2;
    }

    /**
     * @param {string} s
     * @param {number} k
     * @returns {string}
     */
    removeKdigitsRec(s, k) {
        if (k === 0) {
            return s;
        }

        if (s.length <= k) {
            return '';
        }

        for (let i = 0; i < 10; i++) {
            const pos = s.indexOf(`${i}`);
            if (pos >= 0 && pos <= k) {
                const sub = this.removeKdigitsRec(s.slice(pos + 1), k - pos);
                return `${i}` + sub;
            }
        }
    }
}