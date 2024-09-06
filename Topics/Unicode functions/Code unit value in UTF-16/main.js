function getCharCode(character) {
  // Write your code here
return character.charCodeAt(0);
}

/* Do not change code below */

process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
  const inputCharacter = data.trim();

  const codeUnitValue = getCharCode(inputCharacter);

  process.stdout.write(codeUnitValue.toString());
});