const LEVEL_1 = 1.678;
const LEVEL_2 = 1.734;
const LEVEL_3 = 2.014;
const LEVEL_4 = 2.536;
const LEVEL_5 = 2.834;
const LEVEL_6 = 2.927;

function computeElectricFee(x) {
  if (x <= 50) {
    return x * LEVEL_1;
  } else if (x <= 100) {
    return 50 * LEVEL_1 + (x - 50) * LEVEL_2;
  } else if (x <= 200) {
    return 50 * (LEVEL_1 + LEVEL_2) + (x - 100) * LEVEL_3;
  } else if (x <= 300) {
    return 50 * (LEVEL_1 + LEVEL_2) + 100 * LEVEL_3 + (x - 200) * LEVEL_4;
  } else if (x <= 400) {
    return (
      50 * (LEVEL_1 + LEVEL_2) + 100 * (LEVEL_3 + LEVEL_4) + (x - 300) * LEVEL_5
    );
  } else {
    return (
      50 * (LEVEL_1 + LEVEL_2) +
      100 * (LEVEL_3 + LEVEL_4 + LEVEL_5) +
      (x - 400) * LEVEL_6
    );
  }
}

console.log(computeElectricFee(500));
