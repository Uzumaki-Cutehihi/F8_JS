function drawRec(n) {
  let flag = 0;
  for (let i = 1; i <= n; i++) {
    let flag_str = "";
    for (let j = 1; j <= i; j++) {
      flag++;
      flag_str += `${flag} `;
    }
    console.log(flag_str);
  }
}

drawRec(5);
