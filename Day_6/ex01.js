//Oject.key(obj) --> key arr

const user = {
  name: "Hoang Na",
  email: "hoangan@gmail.com",
  age: null,
  address: 0,
  position: "Teacher",
};

Object.keys(user).forEach((e) => {
  if (!user[e] && user[e] != 0) {
    delete user[e];
  }
});

console.log(user);
