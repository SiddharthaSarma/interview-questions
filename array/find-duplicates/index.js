function findDuplicates(arr) {
  // sort the array in ascending order
  arr = arr.sort((a, b) => a - b);
  var isRepeated = false;
  for (let i = 1; i < arr.length; i++) {
    if ((arr[i] ^ arr[i - 1]) === 0) {
      if (!isRepeated) {
        console.log(arr[i]);
      }
      isRepeated = true;
    } else {
      isRepeated = false;
    }
  }
}

findDuplicates([1, 2, 3, 1, 3, 6, 6]);
