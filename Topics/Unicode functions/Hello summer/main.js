function codeValuesToString(codeValues) {
  let result = '';
  /* Do not change code above */

  //Write your code here
  for( let i = 0; i < codeValues.length; i++ ) {
    result += String.fromCodePoint(codeValues[i]);
  }
  /* Do not change code below */
  return result;
}

process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const inputArray = data.trim().split(/,\s*/).map(Number);

  const outputString = codeValuesToString(inputArray);

  process.stdout.write(outputString);
});