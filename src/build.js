"use strict";

import * as process from "node:process";
import * as fs from "node:fs";

(async function () {
    let config = {};
    try {
        config = JSON.parse(fs.readFileSync('config.json').toString());
    } catch (e) {
        console.log('config.json file not found');
        return;
    }

    const folder = process.argv[2].split("/").pop();

    if (fs.existsSync(`src/${folder}`)) {
        return;
    }

    const response = await fetch(`https://practiceapi.geeksforgeeks.org/api/latest/problems/${folder}/metainfo/`, {
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "accept-language": "en-US,en;q=0.9,es;q=0.8,ca;q=0.7",
            "cache-control": "max-age=0",
            "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            "cookie": config.cookie,
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
        "method": "GET"
    });

    const json = await response.json();
    const input = json.results.extra.input;
    if (json.results.extra.initial_user_func.javascript === undefined) {
        throw new Error('No javascript problem');
    }

    fs.mkdirSync(`src/${folder}`);

    fs.writeFileSync(`src/${folder}/input`, `1\n${input}`);
    fs.writeFileSync(`src/${folder}/expected`, '');

    const created = new Date((+json.results.extra.initial_user_func.javascript.updated_at_timestamp) * 1000);
    const mainParts = json.results.extra.initial_user_func.javascript.initial_code.split('function main() {');
    const prev = '"use strict";\n' +
        '\n' +
        `// https://www.geeksforgeeks.org/problems/${folder}/1\n` +
        `// ${created.toISOString()}\n` +
        '\n' +
        '/**\n' +
        ' * @param {{\n' +
        ' *     readLine: () => string,\n' +
        ' *     printList: (res: any[], n: number) => void\n' +
        ' * }} input\n' +
        ' */\n';
    let main = 'export default function main(input) {' + mainParts.pop() + '\n';
    main = main.replaceAll('readLine', 'input.readLine');
    main = main.replaceAll('printList', 'input.printList');
    main = main.replaceAll('// } Driver Code Ends', '');

    const userParts = json.results.extra.initial_user_func.javascript.user_code;
    main += userParts;
    fs.writeFileSync(`src/${folder}/main.js`, prev + main);

    console.log(`Code: file://${process.cwd()}/src/${folder}/main.js`);
    console.log(`Input: file://${process.cwd()}/src/${folder}/input`);
    console.log(`Expected: file://${process.cwd()}/src/${folder}/expected`);
})();