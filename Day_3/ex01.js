function countSubStr(str, substr) {
  let n = str.length;
  let size = substr.length;
  let count = 0;
  for (let i = 0; i < n - size; i++) {
    let flagStr = str.slice(i, i + size);
    if (flagStr == substr) {
      count++;
    }
  }
  return count;
}

function importStyle(str, subStr) {
  let res = str.replaceAll(
    subStr,
    `<span style="color: red;">${subStr}</span>`
  );
  return res;
}

let str = document.querySelector(".check");
let x = str.innerHTML;

console.log(countSubStr(x, " Khiem "));
console.log(importStyle(x, "Khiem"));

str.innerHTML = importStyle(x, " Khiem ");
