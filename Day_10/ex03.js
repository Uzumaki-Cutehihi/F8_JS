// // DOM CSS --> Sử dụng qua prop style

// const contentEl = document.querySelector(".content");

// Object.assign(contentEl.style, {
//   backgroundColor: "yellow",
//   fontStyle: "italic",
// });

// // Cho phép thêm nhiều thuộc tính css cùng 1 lúc với assign

// Event Obj
//e.clientX, e.clientY --> Khoảng cách tới viền ngoài
//e.offsetX, e.offsetY --> Khoảng cách tới viền phần tử được ăn click
// key  --> áp dụng sự kiện key up key down --> Bắt phím ở document --> Mọi nhập liệu đều được bắt

// const btn = document.querySelector("button");
// btn.addEventListener("click", (e) => {
//   console.log(e);
// });

// const input = document.querySelector("input");
// input.addEventListener("keydown", (e) => {
//   console.log(e.key);
// });

// // preventDefault(): Ngăn chặn hành động mặc định của html
// const formEl = document.querySelector("form");
// formEl.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("submit");
// });

// Nổi bọt
// stopPropagation() --> Ngăn nổi bọt sự kiện từ thẻ html con

const boxEl = document.querySelector(".box");
const btnEl = document.querySelector("button");

boxEl.addEventListener("click", () => {
  console.log("box");
});

btnEl.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("btn");
});
