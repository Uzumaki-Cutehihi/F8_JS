// const contentEl = document.querySelector("img");

// Lấy và cập nhật nội dung bên trong thẻ html  --> .innerHTML

// Lấy nội dung (Không có HTML) ==> .innerText

// Lấy nội dung (Không có HTML, nhưng giữ khoảng cách ban đầu ) --> .textContent

// Lấy nội dung bên trong và chính nó của thẻ HTML --> .outerHTML

// Xoá phần tử HTML
// Xoá nội dung bên trong --> .innerHTML = "";
// Xoá toàn bộ (cả phần tử) --> .remove();

// Thao tác với thuộc tính cuả thẻ HTML

// .setAttribute(name, value);

// truy cập vào các thuộc tính bên trong html --> Dùng .dataset ---> trả về object có chứa các thuộc tính và giá trị
// Dùng dataset đểm thêm/ sửa thuộc tính custom bên trong NodeDOM

// const btn = document.querySelector("button");
// btn.onclick = () => {
//   contentEl.src =
//     "https://photo.znews.vn/w660/Uploaded/mdf_eioxrd/2021_07_06/2.jpg";
// };

const inputVal = document.querySelector("input");
const btn = document.querySelector("button");
const error = document.querySelector(".error");
const imgContainer = document.querySelector(".img-container");

btn.onclick = () => {
  error.innerText = "";
  imgContainer.innerHTML = "";
  if (inputVal.value.trim()) {
    const img = document.createElement("img");
    img.src = inputVal.value;
    imgContainer.append(img);
    inputVal.value = "";
  } else {
    error.innerText = "Vui long nhap linh anh";
  }
};
