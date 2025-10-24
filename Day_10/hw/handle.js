const submitBtn = document.querySelector("#submit");
const inputTodo = document.querySelector("#inputTodo");
const todoList = document.querySelector("#todoList > ul");
let todoItemDelBtns = null;
let todoItemFixBtns = null;

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const todoContent = inputTodo.value.trim();
  if (todoContent === "") {
    return;
  }
  const todoItem = document.createElement("li");
  todoItem.className =
    " px-3 py-2 rounded-md flex justify-between items-center bg-blue-300 mb-4";
  todoItem.innerHTML = `<span>${todoContent}</span>
    <div class="flex gap-2  ">
      <button class="fix text-sm text-blue-400 hover:text-blue-600">Fix</button>
      <button class="del text-sm text-gray-400 hover:text-red-400">Delete</button>
    </div>`;
  todoList.appendChild(todoItem);
  inputTodo.value = "";

  todoItemDelBtns = todoList.querySelectorAll("li > div > .del");
  todoItemFixBtns = todoList.querySelectorAll("li > div > .fix");
});

// Xử lý delete --> Ok thì ta có thể thấy việc click xảy ra trong bất kì item nào trong list
// Cần lắng nghe chi tiết

todoList.addEventListener("click", (e) => {
  // T chặn hành vi mặc định tại đây --> tránh reload
  e.preventDefault();
  const flag = e.target; // Button bị click

  // Nếu là del
  if (flag.className.includes("del")) {
    flag.closest("li").remove(); // Xoá parent gần nhất
  }

  // Nếu là fix
  if (flag.className.includes("fix")) {
    const fixForm = document.createElement("form");
    const fixItem = flag.closest("li");
    fixForm.classList.add("mb-4");
    fixForm.innerHTML = `
            <input id="inputTodo"
                class="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md text-gray-200 focus:outline-none focus:border-purple-400"
                type="text" placeholder="What is the task today">
            <button id="submit" class="bg-purple-600 text-white px-4 py-2 rounded">Add Task</button>
        `;
    fixItem.replaceWith(fixForm);
    const fixSubmitBtn = fixForm.querySelector("#submit");
    fixSubmitBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const newContent = fixForm.querySelector("#inputTodo").value;
      const updateContent = `<span>${newContent}</span>
    <div class="flex gap-2  ">
      <button class="fix text-sm text-blue-400 hover:text-blue-600">Fix</button>
      <button class="del text-sm text-gray-400 hover:text-red-400">Delete</button>
    </div>`;
      const updateItem = document.createElement("li");
      updateItem.className =
        " px-3 py-2 rounded-md flex justify-between items-center bg-blue-300 mb-4";
      updateItem.innerHTML = updateContent;
      fixForm.replaceWith(updateItem);
    });
  }
});
