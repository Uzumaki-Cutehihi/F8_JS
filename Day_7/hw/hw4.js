const employees = [
  { id: 1, name: "Mai", department: "IT", salary: 1200 },
  { id: 2, name: "Nam", department: "HR", salary: 800 },
  { id: 3, name: "Hà", department: "IT", salary: 1500 },
  { id: 4, name: "Linh", department: "Marketing", salary: 900 },
  { id: 5, name: "Phúc", department: "IT", salary: 1100 },
];

function sumSalary() {
  let res = {};
  for (let employer of employees) {
    if (res[employer.department]) {
      res[employer.department] += employer.salary;
    } else {
      res[employer.department] = employer.salary;
    }
  }
  return res;
}

function highestEmployerList() {
  let res = {};
  for (let employer of employees) {
    if (
      !res[employer.department] ||
      res[employer.department].salary < employer.salary
    ) {
      res[employer.department] = {
        id: employer.id,
        name: employer.name,
        salary: employer.salary,
      };
    }
  }
  return res;
}

console.log(highestEmployerList());

function employerList() {
  let res = {};
  for (let employer of employees) {
    if (!res[employer.department]) {
      res[employer.department] = [
        {
          id: employer.id,
          name: employer.name,
          salary: employer.salary,
        },
      ];
    } else {
      res[employer.department].push({
        id: employer.id,
        name: employer.name,
        salary: employer.salary,
      });
    }
  }
  return res;
}

console.log(employerList());
