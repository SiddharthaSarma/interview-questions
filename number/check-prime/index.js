function checkPrime(num) {
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }

  let divisor = 5;
  let val = Math.sqrt(num);
  while (divisor < val) {
    if (num % divisor === 0) {
      return false;
    }
    divisor += 2;
  }
  return true;
}

module.exports = checkPrime;
