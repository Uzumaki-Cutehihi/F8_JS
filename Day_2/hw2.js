function checkPrimeNumber(x) {
  if (x < 2) return false;
  if (x <= 3) return true;
  if (x % 2 === 0 || x % 3 === 0) return false;

  for (let i = 5; i * i <= x; i += 6) {
    if (x % i === 0 || x % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

console.log(checkPrimeNumber(3));
