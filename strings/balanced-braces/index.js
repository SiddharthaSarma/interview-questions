function checkBalancedBraces(string) {
  let braces = '(){}[]';
  let stack = [];

  for (let i = 0; i < string.length; i++) {
    let stringIndex = braces.indexOf(string[i]);
    if (stringIndex === -1) {
      continue;
    }

    if (stringIndex % 2 === 0) {
      stack.push(braces[stringIndex + 1]);
    } else {
      if (stack.pop() !== string[i]) {
        return false;
      }
    }
  }

  return stack.length ? false : true;
}
module.exports = checkBalancedBraces;
