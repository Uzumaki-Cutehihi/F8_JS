//hw1

const arr1 = [1, 2, 3, 4, 5, 6];
const res_hw1_1 = arr1.map((val) => {
  return val ** 2;
});
const res_hw1_2 = arr1.filter((val) => {
  if (val % 2 == 0) {
    return val;
  }
});
const res_hw1_3 = arr1.filter((val) => val % 2 == 1).map((val) => val ** 2);

//hw2:

const arr2 = ["   hoang ", "AN", "  f8   ", "Education"];
const res_hw2 = arr2.map((val) => val.trim().toLowerCase());

//hw3:

const arr3 = [3, 7, 2, 9, 12, 15, 18];
const res_hw3_1 = arr3.filter((val) => val >= 10);
const res_hw3_2 = res_hw3_1.filter((val) => val % 3 == 0);
// Câu hỏi chưa tường minh
const res_hw3_3 = arr3.map((val) => {
  if (val % 2 == 0) {
    return val * 2;
  } else {
    return val;
  }
});

//hw4

const arr4 = ["javascript", "php", "css", "html", "python", "java"];
const res_hw4_1 = arr4.filter((val) => val.length >= 5);
const res_hw4_2 = arr4.map((val) => val.toUpperCase());
const res_hw4_3 = arr4.map((val) => val.split("").reverse().join(""));

// hw5

function sumRowArr(a) {
  let res = 0;
  for (let i = 0; i < a.length; i++) {
    res += a[i];
  }
  return res;
}

// Nếu mảng là ma trận đều
function sumColArr(a) {
  let res = a[0];
  for (let i = 1; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      res[j] += a[i][j];
    }
  }
  return res;
}

// Nếu mảng không đều cần fill thêm giá trị 0 trước khi dùng hàm sumColArr
function fillArray(a) {
  let res = a;
  let sizeY = a.length;
  let sizeX = Math.max(...a.map((val) => val.length));
  for (let i = 0; i < sizeY; i++) {
    for (let j = 0; j < sizeX; j++) {
      if (a[i][j]) {
        res[i][j] = a[i][j];
      } else {
        res[i][j] = 0;
      }
    }
  }
  return res;
}

const arr5 = [
  [1, 2, 3],

  [4, 5, 6],

  [7, 8, 9],
];

const ex5 = [
  [1, 2, 3],

  [4, 5, 6, 2],

  [7, 8, 9, 5, 1],
];

const res_hw5_1 = arr5.map((a) => sumRowArr(a));
const res_hw5_2 = sumColArr(fillArray(ex5));

// lọc ra các hàng có tổng > 10
const res_hw5_3 = arr5.filter((a) => sumRowArr(a) > 10);

// hw6

const arr6 = [
  ["hello", "world"],

  ["javascript", "php"],

  ["css", "html"],
];

const res_hw6_1 = arr6.map((val) => val.map((a) => a.toUpperCase()));
const res_hw6_2 = arr6.map((val) => val.filter((a) => a.length > 4));
const res_hw6_3 = arr6.flat(2);

//hw7

const arr7 = [
  [2, 4, 6],

  [8, 10, 12],

  [14, 16, 18],
];

const arr7_test = [
  [2, 4, 6, 5],

  [8, 10, 12, 1],

  [14, 16, 18, 1],

  [14, 16, 18, 1],
];

//Vì để làm được ý cuối cần phân tích được 1,2 ==> Nên e chỉ làm ý cuối
//Để tồn tại 2 đường chéo ==> Đầu vào phải là 1 mảng ma trận đều
function sumDia(matrix) {
  let matrixSize = matrix.length;
  let res = 0;
  for (let i = 0; i < matrixSize; i++) {
    for (let j = 0; j < matrixSize; j++) {
      if (i == j || i == matrixSize - j - 1) {
        res += matrix[i][j];
      }
    }
  }
  return res;
}

//hw8

const scores = [
  [8, 9, 7], // học sinh 1

  [6, 5, 7], // học sinh 2

  [10, 9, 8], // học sinh 3
];

// Điểm trung bình từng hs
function avgScore(scores) {
  let sumScore = 0;
  for (let score of scores) {
    sumScore += score;
  }
  return sumScore / scores.length;
}

const res_hw8_1 = scores.map((val) => avgScore(val));

// Lọc ra các học sinh điểm trung bình >= 8
const res_hw8_2 = scores
  .map((val, index) => {
    if (avgScore(val) >= 8) {
      return ` Học sinh ${index + 1}`;
    }
  })
  .filter((x) => x != undefined);

// Tạo mảng mới tăng tất cả điểm thêm 1
const res_hw8_3 = scores.map((x) =>
  x.map((val) => {
    if (val <= 9) {
      return (val += 1);
    } else {
      return val;
    }
  })
);

console.log(res_hw8_3);
