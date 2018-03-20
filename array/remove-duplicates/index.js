function removeDuplicates(arr) {
  return Object.keys(
    arr.reduce((a, b) => {
      if (!a[b]) {
        a[b] = b;
      }
      return a;
    }, {})
  ).map(Number);
}

module.exports = removeDuplicates;
