function fibonacci() {
  let memo = {};
  function innerFibonacci(num) {
    if(num in memo) {
      return memo[num];
    } else if( num < 2) {
      return 1;
    } else {
      memo[num] = innerFibonacci(num -1) + innerFibonacci(num -2);
      return memo[num];
    }
  }
  return innerFibonacci;
}