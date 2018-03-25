function permutation(inputArr) {
  var result = [];
  var i = 1;

  function permute(arr, mem = []) {
    if (!arr.length) {
      result.push(mem);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), mem.concat(next));
      }
    }
    return result;
  }
  return permute(inputArr);
}
