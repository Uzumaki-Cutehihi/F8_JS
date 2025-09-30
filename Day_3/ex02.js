const numbers = [1, 2, 5, 9, 4, 8];
function evenNumber(arr) {
  let res = [];
  for (let a of arr) {
    if (a % 2 == 0) {
      res.push(a);
    }
  }
  return res;
}
console.log(evenNumber(numbers));
