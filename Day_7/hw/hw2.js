const students = [
  { id: 1, name: "An", scores: { math: 8, english: 7, science: 9 } },
  { id: 2, name: "Bình", scores: { math: 6, english: 8, science: 7 } },
  { id: 3, name: "Châu", scores: { math: 9, english: 6, science: 8 } },
  { id: 4, name: "An", scores: { math: 8, english: 7, science: 9 } },
];

function avgScores(scores) {
  return (scores.math + scores.english + scores.science) / 3;
}

function newAvgScoresList(arr) {
  let res = [];
  for (let student of arr) {
    let flagScore = avgScores(student.scores);
    res.push({
      id: student.id,
      name: student.name,
      avgScores: flagScore,
    });
  }
  return res;
}

const r1 = newAvgScoresList(students);

console.log(r1);

function highestScore(arr) {
  let res = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (res.avgScores < arr[i].avgScores) {
      res = arr[i];
    }
  }
  return res;
}

const r2 = highestScore(r1);

function swapArr(arr, a, b) {
  let flag = arr[a];
  arr[a] = arr[b];
  arr[b] = flag;
}

function sortStudentList(arr) {
  for (let i = 0; i < arr.length; i++) {
    let max = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[max].avgScores < arr[j].avgScores) {
        swapArr(arr, i, j);
      }
    }
  }
  return arr;
}

const r3 = sortStudentList(r1);
