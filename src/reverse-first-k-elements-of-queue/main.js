"use strict";

// https://www.geeksforgeeks.org/problems/reverse-first-k-elements-of-queue/1
// 2023-12-22T06:15:59.000Z

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
        let q = new Queue();
        let input_ar0 = input.readLine().split(' ').map(x => parseInt(x));
        let n = input_ar0[0];
        let k = input_ar0[1];
        let input_ar1 = input.readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++) q.push(input_ar1[i]);
        let obj = new Solution();
        let a = obj.modifyQueue(q, k);
        let res = '';
        while (!a.empty()) {
            res += a.front_ele() + " ";
            a.pop();
        }
        console.log(res);
    }
}

class Queue {
    constructor() {
        this.arr = [];
        this.front = 0;
    }

    push(a) {
        this.arr.push(a);
    }

    pop() {
        if (this.arr.length != this.front) {
            let x = this.arr[this.front];
            this.front++;
            return x;
        } else
            return -1;
    }

    front_ele() {
        return this.arr[this.front];
    }

    empty() {
        if (this.arr.length != this.front)
            return false;
        else
            return true;
    }
}

class Solution {

    /**
     * @param {Queue} q
     * @param {number} k
     * @returns {Queue}
     */
    modifyQueue(q, k) {
        const stack = [];
        const ret = new Queue();

        while (k > 0) {
            stack.push(q.pop());
            k--;
        }

        while (stack.length > 0) {
            ret.push(stack.pop());
        }

        while (!q.empty()) {
            ret.push(q.pop());
        }

        return ret;
    }
}