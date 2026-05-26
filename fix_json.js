const fs = require('fs');
let content = fs.readFileSync('./mq-test/analysis.json', 'utf8');

// Fix string concatenation
content = content.replace(/" \+ "/g, "");

// Fix the missing bracket in line 145: "friendship": { ... "desc": "...", "life": { ... }
// We need to change `", "life": {` to `"}, "life": {`
content = content.replace(/유쾌한 리더입니다.", "life"/g, '유쾌한 리더입니다."}, "life"');

fs.writeFileSync('./mq-test/analysis.json', content);
console.log('Fixed analysis.json');
