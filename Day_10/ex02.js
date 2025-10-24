// Ý tưởng 1

// const items = document.querySelectorAll("ul li button");
// console.log(items);

// items.forEach((item) => {
//   item.addEventListener("click", () => {
//     const content = item.nextElementSibling;
//     content.classList.toggle("active");
//     if (item.innerText == "Show") {
//       item.innerText = "Hidden";
//     } else {
//       item.innerText = "Show";
//     }
//   });
// });

// Ý tưởng 2

const allItem = document.querySelectorAll("ul li");

allItem.forEach((item) => {
  const btn = item.querySelector("button");

  btn.addEventListener("click", () => {
    const itemActive = document.querySelector("ul li.active");

    item.classList.toggle("active");

    if (itemActive) {
      itemActive.classList.remove("active");
      const btnActive = itemActive.querySelector("button");
      btnActive.innerText = "show";
    }

    if (item.classList.contains("active")) {
      btn.innerText = "hide";
    } else {
      btn.innerText = "show";
    }
  });
});
