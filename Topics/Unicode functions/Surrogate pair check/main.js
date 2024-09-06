const readline = require('readline');

/* Do not change code above */

function hasSurrogatePairs(char) {
    //Write your code here
  return char.codePointAt(0) !== char.charCodeAt(0);
}

/* Do not change code below */

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  encoding: 'utf16le',
});

let character = '';
rl.input.on('data', (data) => {
  character += data;
});

rl.on('close', () => {
  console.log(hasSurrogatePairs(character));
});

rl.question('', () => {
  rl.close();
});