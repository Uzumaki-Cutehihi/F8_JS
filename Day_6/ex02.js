const queryString =
  "keyword=Khoa+FullStack&status=active&category=1&keyword=Khoa";

let test = queryString
  .replaceAll("+", " ")
  .split("&")
  .map((e) => e.split("="));
console.log(test);
let result = {};
for (let key of test) {
  if (key[0] in result) {
    if (Array.isArray(result[key[0]])) {
      result[key[0]].push(key[1]);
    } else {
      result[key[0]] = [result[key[0]], key[1]];
    }
  } else {
    result[key[0]] = key[1];
  }
}
console.log(result);
