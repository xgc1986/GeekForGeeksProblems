"use strict";

// https://www.geeksforgeeks.org/problems/print-the-pattern-set-1/1
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
    
    let obj = new Solution();
    obj.printPat(n);
  }

}

class Solution {

/**
 * @param {number} n
*/
  printPat(n){
    //code here
  }
}
