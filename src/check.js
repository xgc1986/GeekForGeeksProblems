import * as process from "node:process";
import * as fs from "node:fs";

const folder = process.argv[2];

const expected = fs.readFileSync(`${folder}/expected`).toString().trimEnd().split("\n");
const actual = fs.readFileSync(`${folder}/output`).toString().trimEnd().split("\n");

const RESET = '\x1b[0m';
const GRAY = '\x1b[37m';

let success = true;
for (let l = 0; l < Math.max(expected.length, actual.length); l++) {
    if (expected[l] !== actual[l]) {
        const e = expected[l].replaceAll(' ', GRAY + '˽' + RESET);
        const a = (actual[l] || '').replaceAll(' ', GRAY + '˽' + RESET);
        console.log(`Expected -> ${e}`);
        console.log(`Actual   -> ${a}`);
        success = false;
        break;
    }
}

if (success) {
    console.log('Success!');
}