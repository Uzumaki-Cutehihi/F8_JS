function show(n, str1, str2) {
  str1 = "Số lẻ:";
  str2 = "Số chẵn:";
  for (let i = 1; i < n; i++) {
    if (i % 2 == 1) {
      str1 += ` ${i},`;
    } else {
      str2 += ` ${i},`;
    }
  }

  str1 = str1.slice(0, -1);
  str2 = str2.slice(0, -1);
  console.log(str1 + "\n" + str2);
}

let str1, str2;
show(10, str1, str2);
