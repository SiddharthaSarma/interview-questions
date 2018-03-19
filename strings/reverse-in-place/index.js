function stringReverseInPlace(str) {
  return str
    .split(' ')
    .reverse()
    .join(' ')
    .split('')
    .reverse()
    .join('');
}

module.exports = stringReverseInPlace;
