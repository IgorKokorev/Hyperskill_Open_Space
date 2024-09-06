const readline = require('readline');

/* Do not change code above */

function sequentialCharTest(str) {
  //Write your code here
  let result = true;
  for (let i = 1; i < str.length; i++) {
    if (str.charCodeAt(i) !== (str.charCodeAt(i - 1) + 1)) {
      result = false;
      break;
    }
  }
  return result;
}

/* Do not change code below */

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  const result = sequentialCharTest(input);
  console.log(result);
});