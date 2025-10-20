// copy object
//Gán bình thường sẽ là gán cả địa chỉ

const a = {
  name: "hoang an",
  email: "hoangan#gmail.com",
};

const b = a;
b.name = "Son";
console.log(a);

//copy giá trị
const c = Object.assign({}, a); //Bản copy (địa chỉ khác) --> Shallow copy

const d = { ...a }; // Spread

//deep copy --> Chuyển obj sang json --> Chuyển json chuyển ngược về object

const json = JSON.stringify(a);
const deepCopy = JSON.parse(json); //Nhược điểm nếu trong Object có hàm thì k copy được
console.log(deepCopy);

//Xử lý mảng - Array Copy
// Dùng các phương thức xử lý mảng trả về mảng mới: slice, map, filter, reduce

// const s = arr.slice();
// s[0] = "Khiem";
// console.log(a);
// console.log(s);

// Đối tượng bất biến
const user = Object.freeze({
  name: "Hoang An",
  email: "hoangan.web@gmail.com",
});

//destructuring --> Dùng để phá vỡ cấu trúc object, array để truy cập vào các phần tử của nó, sau đó lưu trữ thành các biến riêng biệt

const xser = {
  name: "Truong Khiem",
  email: "khiem@",
};

const { name, email } = xser;
console.log(name, email);
