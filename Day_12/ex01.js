// clone node
const realDiv = document.querySelector("#app");
const h2 = document.querySelector("h2");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const newNode = h2.cloneNode(true);
  realDiv.append(newNode);
});
