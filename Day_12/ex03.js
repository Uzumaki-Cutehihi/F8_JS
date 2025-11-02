// Trong JS tồn tại cả đồng bộ và bất đồng bộ

// 1. Đồng bộ
// alert("Xin chao");
// console.log("Ok");

// Promise Object
// Chaining: a().b().c().d()

// Trang thái của promise
// - pending --> Chờ xử lý
// - fulfilled --> Xử lý thành công
// - rejected --> Xử lý thất bại

// Bước 1 --> Khởi tạo obj promise
// new Promise(callback)
const getUsers = () => {
  return new Promise((resolve, reject) => {
    // resolve là 1 hàm dùng để chứa dữ liệu khi thành công
    // reject --> thất bại
    setTimeout(() => {
      const user = ["user1", "user2", "user3"];
      resolve(user);
      reject("errors");
    }, 2000);
  });
};

// Bước 2 --> Sử dụng Object promise để lấy kết quả
getUsers()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("done");
  });
