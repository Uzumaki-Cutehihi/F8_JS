const ul = document.querySelector("ul#main");
// Lấy ra 2 nút của customMenu
const delBtn = document.querySelector("#delete");
const renameBtn = document.querySelector("#rename");
// Lấy nút modal
const saveRenameBtn = document.querySelector("#saveRename");

// Bắt sự kiện
ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("down")) {
    const li = e.target.parentElement;
    const nextElement = li.nextElementSibling;
    if (!nextElement) {
      return;
    }
    ul.insertBefore(nextElement, li);
  }

  if (e.target.classList.contains("up")) {
    const li = e.target.parentElement;
    const prevElement = li.previousElementSibling;
    if (!prevElement) {
      return;
    }
    ul.insertBefore(li, prevElement);
  }

  if (e.target.nodeName === "LI") {
    e.stopPropagation();
    removeSelected();
    e.target.classList.add("selected");
    const item = e.target;
    document.onkeyup = (e) => {
      handleDuplicate(e, item);
    };
  }
});

// Huỷ chọn
const removeSelected = () => {
  const itemSelected = document.querySelector("ul li.selected"); // Tìm thấy được
  if (itemSelected) {
    itemSelected.classList.remove("selected");
  }
};

const handleDuplicate = (e, item) => {
  if (e.altKey && e.shiftKey) {
    // 2 sự kiện khác nhau về vị trí sao chep
    if (e.key === "ArrowDown") {
      const itemClone = item.cloneNode(true);
      itemClone.classList.remove("selected");
      const nextElement = item.nextElementSibling;
      if (nextElement) {
        ul.insertBefore(itemClone, nextElement);
      } else {
        ul.append(itemClone);
      }
    }
    if (e.key === "ArrowUp") {
      const itemClone = item.cloneNode(true);
      itemClone.classList.remove("selected");
      ul.insertBefore(itemClone, item);
    }
  }
};

// nghe sự kiện click bên ngoài
document.addEventListener("click", removeSelected);

// custom Menu
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  const liItem = e.target.closest("li");
  if (
    liItem &&
    liItem.parentElement.tagName === "UL" &&
    liItem.parentElement !== customMenu.querySelector("ul")
  ) {
    const { clientX: x, clientY: y } = e;

    customMenu.style.top = `${y}px`;
    customMenu.style.left = `${x}px`;
    customMenu.style.display = "block";

    delBtn.onclick = () => {
      liItem.remove();
      customMenu.style.display = "none";
    };

    renameBtn.onclick = () => {
      customMenu.style.display = "none";
      renameModal.style.display = "flex";
      renameInput.value = liItem.childNodes[0].textContent.trim();
      renameInput.focus();

      saveRenameBtn.onclick = () => {
        liItem.childNodes[0].textContent = renameInput.value.trim() + " ";
        renameModal.style.display = "none";
      };
    };
  }
  removeSelected();
});

const customMenu = document.querySelector("#customMenu");

// Ẩn menu khi click ra ngoài hoặc esc

const closeCustomMenu = () => {
  document.addEventListener("click", () => {
    customMenu.style.display = "none";
    removeSelected();
  });

  document.onkeyup = (e) => {
    if (e.key === "Escape") {
      customMenu.style.display = "none";
      removeSelected();
    }
  };
};

closeCustomMenu();
