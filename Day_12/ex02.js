const root = document.querySelector("ul");
const list = document.querySelectorAll("li");
const body = document.querySelector("body");

function upMove(x) {
  let flag = x.previousElementSibling;
  if (flag) {
    root.insertBefore(x, flag);
    return;
  }
  alert("Can't move");
}

function downMove(x) {
  let flag = x.nextElementSibling;
  if (flag) {
    root.insertBefore(flag, x);
    return;
  }
  alert("Can't move");
}

const upBtns = document.querySelectorAll(".up");
const downBtns = document.querySelectorAll(".down");

upBtns.forEach((btn) => {
  btn.onclick = (e) => {
    console.log(e.target.parentNode);
    upMove(e.target.parentNode);
  };
});

downBtns.forEach((btn) => {
  btn.onclick = (e) => {
    console.log(e.target.parentNode);
    downMove(e.target.parentNode);
  };
});

// Chọn
document.addEventListener("click", (e) => {
  list.forEach((li) => {
    li.className = "";
  });
  if (e.target.nodeName === "LI") {
    e.stopPropagation();
    removeSelected();
    e.target.classList.add("checked");
    const flag = e.target;
    document.addEventListener("keyup", (e) => {
      handleDuplicate(e, item);
    });
  }
});

const removeSelected = () => {
  const itemSelected = document.querySelector("ul .checked");
  if (itemSelected) {
    itemSelected.classList.remove("checked");
  }
  document.removeEventListener("keyup", handleDuplicate);
};

const handleDuplicate = (e, item) => {
  if (e.altKey && e.shiftKey)
    if (e.key === "ArrowDown") {
      const itemClone = item.cloneNode(true);
      itemClone.classList.remove("checked");
      const nextElement = item.nextElementSibling;

      if (nextElement) {
        root.insertBefore(itemClone, nextElement);
      } else {
        root.append(itemClone);
      }
    }
  if (e.key === "ArrowUp") {
  }
};

document.addEventListener("click", removeSelected);
