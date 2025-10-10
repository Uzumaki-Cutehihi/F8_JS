const students = [
  { name: "Lan", scores: [8, 9, 7] },

  { name: "Huy", scores: [6, 5, 7] },

  { name: "Minh", scores: [9, 8, 10] },
];

function avg(scs) {
  let res = scs.reduce((sum, sc) => sum + sc, 0) / scs.length;
  return res;
}

// Tính điểm trung bình
students.map((student) => {
  student.avgScore = avg(student.scores);
});

console.log(students);

// Danh sách đạt loại giỏi
const gudStudent = students.filter((student) => {
  if (student.avgScore >= 8) {
    return student;
  }
});

console.log(gudStudent);

//Sort Student
const rankedList = students.slice();

function swapArr(i, j, arr) {
  let flag = arr[i];
  arr[i] = arr[j];
  arr[j] = flag;
}

for (let i = 0; i < rankedList.length - 1; i++) {
  let maxIndex = i;
  for (let j = i + 1; j < rankedList.length; j++) {
    if (rankedList[j].avgScore > rankedList[maxIndex].avgScore) {
      maxIndex = j;
    }
  }
  if (maxIndex != i) {
    swapArr(maxIndex, i, rankedList);
  }
}

console.log(rankedList);
