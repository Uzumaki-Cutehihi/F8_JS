// hw3
function linearFind(arr, element) {
  for (let a of arr) {
    if (a == element) {
      return false;
    }
  }
  return true;
}

function fillArr(arr) {
  let res = [];
  res.push(arr[0]);
  for (let a of arr) {
    if (linearFind(res, a)) {
      res.push(a);
    }
  }
  return res;
}

let arrT = ["User 1", "User 2", "User 3", "User 2", "User 4"];
console.log(fillArr(arrT));

// hw4
function swapArray(index1, index2, array) {
  let flag = array[index1];
  array[index1] = array[index2];
  array[index2] = flag;
}

function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let maxIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] > arr[maxIndex]) {
        maxIndex = j;
      }
    }
    swapArray(maxIndex, i, arr);
  }
  return arr;
}

function big2(arr) {
  let flagArr = selectionSort(arr);
  return flagArr[1];
}

let numbers = [5, 2, 1, 9, 8, 0];
console.log(big2(numbers));

// hw5
function insertElement(arr, e) {
  if (arr[0] >= e) {
    arr.unshift(e);
  } else if (arr[length - 1] <= e) {
    arr.push(e);
  } else {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] <= e && arr[i + 1] >= e) {
        let first = arr.slice(0, i + 1);
        first[i + 1] = e;
        let second = arr.slice(i + 1);
        arr = first.concat(second);
        break;
      }
    }
  }
  return arr;
}

let numberss = [1, 3, 5, 7, 9, 11, 12, 15];
console.log(insertElement(numberss, 4));
