// classList

// const contentEl = document.querySelector(".content");

// // 1. Thêm class mới --> add
// console.log(contentEl.classList);
// contentEl.classList.add("hehe");

// // 2. Thay thế class --> Replace
// contentEl.classList.replace("hehe", "hic");
// console.log(contentEl.classList);

// // 3. Xoá class --> Remove
// contentEl.classList.remove("hic");

// // 4. Toogle --> Chưa có class thì sẽ thêm/ Có thì sẽ xoá
// contentEl.classList.toggle("active");
// console.log(contentEl.classList);

// // 5.  contains(class) => Trả về true nếu class tồn tại

const allItem = document.querySelectorAll("ul li");
allItem.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(item);
  });
});
