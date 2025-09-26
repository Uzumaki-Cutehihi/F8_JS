function compute(n) {
  let sum = 0;
  for (let i = 1; i < n + 1; i++) {
    sum += (i + 1) * i;
  }
  return sum;
}

function hw5(a, b) {
  let odd_sum = 0;
  let even_sum = 0;
  for (let i = a; i <= b; i++) {
    if (i % 2 == 0) {
      even_sum += i;
    } else {
      odd_sum += i;
    }
  }
  console.log(`Tổng số lẻ: ${odd_sum} \nTổng số chẵn: ${even_sum}`);
}

hw5(5, 9);
