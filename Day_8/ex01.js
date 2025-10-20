// static method
// Không cần khởi tạo vẫn có thể sử dụng được
// Static là biến định nghĩa cho riêng Class --> Truy cập từ Class (k phải instance)
// Class.classMethod or Class.classProperty
// this.constructor.classMethod

// class User {
//   static data = ["user1", "user2", "user3"];
//   static message = "Hoc lao trinh ";
//   email = "helo";
//   static getEmail() {
//     const instance = new this();
//     return instance.email;
//     //Tư duy flag
//   }
//   static getMessage() {
//     return "hoc lap trinh";
//   }

//   get latest() {
//     return this.constructor.data[2];
//     // return User.data[2];
//   }

//   set latest(val) {
//     console.log(val);
//   }
// }

// console.log(User.getMessage());
// console.log(User.message);

// const user = new User();
// console.log(user.latest);
// user.latest = "ok chua";
// console.log(User.getEmail());

// Kế thừa - extends

// class Human {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
// }

// class Boy extends Human {
//   gender = "male";
//   constructor(name, email, age) {
//     super(name, email); // gọi super để gọi lên những tham số constructor trên hàm cha
//     this.age = age;
//   }
//   getinfor() {
//     return [this.name, this.email, this.gender, this.age];
//   }
// }

// const boy = new Boy("Khiem", "khiemlist", 16);
// console.log(boy.getinfor());

// So sánh Object
// - Obj là kiểu tham chiếu
// - So sánh theo địa chỉ

const a = {
  x: 10,
  y: 20,
  z: {
    a: 1,
    b: {
      c: 10,
    },
  },
};

const b = {
  x: 10,
  y: 20,
  z: {
    a: 1,
    b: {
      c: 10,
    },
  },
};

const isObject = (obj) => {
  return typeof obj === "object" && !Array.isArray(obj) && obj !== null;
};

const compare = (obj1, obj2) => {
  const length1 = Object.keys(obj1).length;
  const length2 = Object.keys(obj2).length;
  if (length1 !== length2) {
    return false;
  }
  for (let key in obj1) {
    if (isObject(obj1[key]) && isObject(obj2[key])) {
      if (!compare(obj1[key], obj2[key])) {
        return false;
      }
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

console.log(compare(a, b));
