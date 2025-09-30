function cond1(x) {
  let checkFlag = 2;
  let indexFlag = 0;
  while (checkFlag > 0 && indexFlag < x.length) {
    if (x[indexFlag] >= "A" && x[indexFlag] <= "Z") {
      checkFlag--;
    }
    indexFlag++;
  }
  return checkFlag <= 0;
}

function cond2(x) {
  let checkFlag = 2;
  let indexFlag = 0;
  while (checkFlag > 0 && indexFlag < x.length) {
    if (x[indexFlag] >= "a" && x[indexFlag] <= "z") {
      checkFlag--;
    }
    indexFlag++;
  }
  return checkFlag <= 0;
}

function cond3(x) {
  let checkFlag = 1;
  let indexFlag = 0;
  while (checkFlag > 0 && indexFlag < x.length) {
    if (x[indexFlag] >= "0" && x[indexFlag] <= "9") {
      checkFlag--;
    }
    indexFlag++;
  }
  return checkFlag <= 0;
}

function cond4(x) {
  return x.length > 7;
}

function cond5(x) {
  let flagStr = "!@#$%^&*()";
  for (let i = 0; i < x.length; i++) {
    if (flagStr.includes(x[i])) {
      return true;
    }
  }
  return false;
}

function checkPassSecurity(x) {
  return cond1(x) && cond2(x) && cond3(x) && cond4(x) && cond5(x);
}

console.log(checkPassSecurity("KHIemmsada1234@@"));
