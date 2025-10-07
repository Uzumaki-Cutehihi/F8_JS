function hasNegative(numbers) {
  return numbers.some((number) => number < 0);
}

function isAllEvent(numbers) {
  return !numbers.some((number) => number % 2 == 1);
}

function findDivisibleBy5(numbers) {
  return numbers.find((number) => {
    return number % 5 === 0;
  });
}

function findLastNegative(numbers) {
  return numbers.findLast((number) => {
    return number < 0;
  });
}

function findFirstOddIndex(numbers) {
  return numbers.findIndex((number) => {
    return number % 2 === 1;
  });
}

function findLastGreaterThan50(numbers) {
  return numbers.findLastIndex((number) => {
    return number > 50;
  });
}

function sum(numbers) {
  return numbers.reduce((acc, val) => acc + val, 0);
}

function multiplyAll(numbers) {
  return numbers.reduce((acc, val) => acc * val, 1);
}

function longestStringLength(strings) {
  let flag = strings[0];
  for (let string of strings) {
    if (string.length > flag.length) {
      flag = string;
    }
  }
  return flag.length;
}

function hasPrime(numbers) {
  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  return numbers.some(isPrime);
}
