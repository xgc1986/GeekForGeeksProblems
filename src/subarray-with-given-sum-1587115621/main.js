"use strict";

// https://www.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1
// 2024-01-09T11:06:55.000Z

/**
 * @param {{
 *     readLine: () => string,
 *     printList: (res: any[], n: number) => void
 * }} input
 */
export default function main(input) {
    let t = parseInt(input.readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_ar0 = input.readLine().split(' ').map(x=>parseInt(x));
        let n = input_ar0[0];
        let s = input_ar0[1];
        let arr = new Array(n);
        let input_ar1 = input.readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        let res = obj.subarraySum(arr, n, s);
        let ans='';
        for(let i=0; i<res.length; i++){
            ans+=res[i];
            ans+=" ";
        }
        console.log(ans);
        
    }
}

class Solution 
{
    /**
     * @param {number[]} arr
     * @param {number} n
     * @param {number} s
     * @returns {number[]}
     */
    subarraySum(arr, n, s)
    {
        let currentSum = 0;
        let start = 0;
        let end = 0;

        while (end < n) {
            currentSum += arr[end];

            while (currentSum > s && start <= end) {
                currentSum -= arr[start];
                start++;
            }

            if (start > end) {
                currentSum = 0;
                end++;
                start = end;
                continue;
            }

            if (currentSum === s) {
                return [start + 1, end + 1];
            }

            end++;
        }

        return [-1];
    }
}