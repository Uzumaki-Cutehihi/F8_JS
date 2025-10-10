const users = [
  { name: "An", age: 25 },

  { name: "Bình", age: 30 },

  { name: "Chi", age: 22 },
];

//In ra tên của tất cả người dùng
users.forEach((user) => {
  console.log(user.name);
});

// Tìm người có tuổi lớn nhất
let oldestUser = users[0];
for (let i = 1; i < users.length; i++) {
  if (users[i].age > oldestUser.age) {
    oldestUser = users[i];
  }
}
console.log(oldestUser);

//Tính tuổi trung bình của tất cả người dùng
let sumAge = 0;
for (let user of users) {
  sumAge += user.age;
}
let avgAge = sumAge / users.length;
console.log(avgAge);
