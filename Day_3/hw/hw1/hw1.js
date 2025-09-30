function countText(str, substr) {
  const size = substr.length;
  let sum = 0;
  for (let i = 0; i < str.length - size; i++) {
    let flagSubstr = str.slice(i, i + size);
    if (flagSubstr == substr) {
      sum++;
      i += size;
    }
  }
  return size;
}

function highlightText(str, substr) {
  let flagStr = str.replaceAll(
    substr,
    `<span style="background-color: yellow;">${substr}</span>`
  );
  return flagStr;
}

// test
let key = document.querySelectorAll(".key");
let count = document.querySelector("#count");
let p = document.querySelector(".main");
let str = p.innerHTML;
let substr = "Lorem";
key.forEach((element) => {
  element.innerHTML = substr;
});
count.innerHTML = countText(str, substr);
p.innerHTML = highlightText(str, substr);
console.log(p.innerHTML);
