
// https://www.geeksforgeeks.org/problems/insertion-sort-for-singly-linked-list/1
// 2023-12-22T08:39:09.000Z

var head = null;

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

function printlist(head){
    let current = head;
    let s='';
    while (current !== null)
    {
        s+=current.data+" ";
        current = current.next;
    }
    console.log(s);
}

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
        let n = parseInt(input.readLine());
        let input_ar1 = input.readLine().split(' ').map(x=>parseInt(x));
        head = null;
        head = new Node(input_ar1[0]);
        let tail = head;
        for(let i=1;i<n;i++){
            tail.next = new Node(input_ar1[i]);
            tail = tail.next;
        }
        let obj = new Solution();
        let newHead = obj.insertionSort(head);
        printlist(newHead);
    }
}

class Solution {

    /**
     * @param {Node} node
     * @return {Node} node
     */
    insertionSort(node)
    {
        let first = node;
        let replaced = true;
        while (replaced) {
            let current = first;
            replaced = false;

            while (current) {
                if (!current.next) {
                    break;
                }

                if (first.data > current.next.data) {
                    let temp = current.next.data;
                    current.next.data = current.data;
                    current.data = first.data;
                    first.data = temp;
                    replaced = true;
                } else if (current.data > current.next.data) {
                    let temp = current.data;
                    current.data = current.next.data;
                    current.next.data = temp;
                    replaced = true;
                }

                current = current.next;
            }

            first = first.next;
        }

        return node;
    }
}

// 6 7 4