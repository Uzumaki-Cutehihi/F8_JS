const sidebar = document.querySelector("#left");
const resize = document.querySelector("#flag");

let offsetX; // khoảng cách giữa chuột và góc bên trái
let isDrag = false;

resize.addEventListener("mousedown", (e) => {
  document.addEventListener("mousemove", handler);
  document.body.classList.add("select-none");
});

document.addEventListener("mouseup", () => {
  document.removeEventListener("mousemove", handler);
  document.body.classList.remove("select-none");
});

const handler = (e) => {
  let x = e.clientX;
  if (x < 180) {
    x = 180;
  }
  if (x > 350) {
    x = 350;
  }
  sidebar.style.width = x + "px";
  console.log("kéo");
};
