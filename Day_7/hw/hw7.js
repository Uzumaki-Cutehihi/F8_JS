const employees = [
  { id: 1, name: "An", projects: ["P1", "P2"] },
  { id: 2, name: "Bình", projects: ["P2", "P3"] },
  { id: 3, name: "Châu", projects: ["P1", "P3", "P4"] },
  { id: 4, name: "Dũng", projects: ["P4"] },
];

function groupEmployeesByPrj(arr) {
  return arr.reduce((acc, employer) => {
    employer.projects.forEach((prj) => {
      if (!acc[prj]) {
        acc[prj] = [];
      }
      acc[prj].push(employer.name);
    });
    return acc;
  }, {});
}

console.log(groupEmployeesByPrj(employees));
const r1 = groupEmployeesByPrj(employees);

//Tìm prj có nhiều ng nhất
function mostPrjEmp(obj) {
  let maxPrj = null;
  let flagCount = 0;

  for (let [prj, count] of Object.entries(r1)) {
    if (count.length > flagCount) {
      maxPrj = prj;
      flagCount = count.length;
    }
  }

  return {
    prj: maxPrj,
    quantityOfEmployer: flagCount,
  };
}

const r2 = mostPrjEmp(r1);
console.log(r2);

// Chuyển đổi dữ liệu về dạng object, trong đó key là projectId, value là danh sách nhân viên thuộc dự án đó.
// Bản chất ta đã làm điều đó ở ý đầu --> thêm id thoii

// Tạo mảng lai obj để lưu trữ tạm

let flagEmp = [];
employees.forEach((e) => {
  flagEmp[e.name] = e.id;
});

function addId(obj) {
  const res = {};
  for (let [prj, list] of Object.entries(obj)) {
    res[prj] = [];
    for (let e of list) {
      res[prj].push({
        name: e,
        id: flagEmp[e],
      });
    }
  }
  return res;
}

const r3 = addId(r1);
console.log(r3);
