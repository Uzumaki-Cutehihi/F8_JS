// hw1
let age = 20;
console.log("Tôi năm nay " + age + " tuổi");

// hw2
const PI = 3.14159;
let r = 5;
let s = PI * 5 ** 2;
console.log(s);

// hw3
let a = 7;
let b = 3;
let different = a - b;
let product = a * b;
let quotient = a - b;
let remainder = a % b;

// hw4
function setName(name) {
  if (!name) {
    return "Khách";
  } else {
    return name;
  }
}
// test
let name1 = "";
let name2 = "Khiem";
let displayName1, displayName2;
displayName1 = setName(name1);
displayName2 = setName(name2);
console.log(displayName1 + " " + displayName2);

// hw5
function licenseCondition(age, hasLicense) {
  if (hasLicense && age >= 18) {
    return "Đủ điều kiện";
  } else {
    return "Không đủ điều kiện";
  }
}
// test
console.log(licenseCondition(20, false));

// hw6
function checkEmpty(username, password) {
  return (
    username !== "" && password !== "" && username != null && password != null
  );
}
// test
console.log(checkEmpty("hehe", "1234"));

// hw7
function computePrice(salePrice, discountRate) {
  if (
    discountRate >= 1 ||
    typeof salePrice != "number" ||
    typeof discountRate != "number"
  ) {
    return "Error Input";
  }
  return salePrice / (1 - discountRate);
}
console.log(computePrice(150, "heh"));

// hw8 - Gán giá trị số cho 2 biên -> hoán đổi k dùng biến trung gian
let x, y;
x = 10;
y = 12;
x = x + y;
y = x - y;
x = x - y;
console.log(x, y);
