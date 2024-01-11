"use strict";

import * as process from "node:process";
import * as fs from "node:fs";

(async function () {

    const folder = process.argv[2].split("/").pop();
    const problem = await import(`./${folder}/main.js`);

    process.stdin.resume();
    process.stdin.setEncoding('utf-8');

    let inputString = '';

    process.stdin.on('data', inputStdin => {
        inputString += inputStdin;
    });

    process.stdin.on('end', _ => {
        inputString = inputString.trim().split('\n').map(string => {
            return string.trim();
        });

        let currentLine = 0;
        const input = {
            readLine: () => {
                return inputString[currentLine++];
            },
            printList: (res, n) => {
                console.log(res.join(' '));
            }
        };

        problem.default(input);
    });
})();