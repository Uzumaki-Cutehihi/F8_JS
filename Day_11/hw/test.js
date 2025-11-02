const products = [
  { id: 1, name: "Product 1", price: 1000 },
  { id: 2, name: "Product 2", price: 2000 },
  { id: 3, name: "Product 3", price: 3000 },
  { id: 4, name: "Product 4", price: 4000 },
];

let totalCart = JSON.parse(localStorage.getItem("cart")) || [];
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(totalCart));
}

function renderCart() {
  const cartContainer = document.querySelector("#cart_data");
  cartContainer.innerHTML = ""; // Set rỗng ban đầu

  if (totalCart.length === 0) {
    cartContainer.textContent = "No item";
    return; // Out khỏi function này luôn
  }

  let totalQuantity = 0;
  let totalPrice = 0;

  const tableHTML = document.createElement("table");
  tableHTML.id = "cart_table";
  // Thêm props cho table
  Object.assign(tableHTML, {
    border: "1",
    cellPadding: "5",
    cellSpacing: "0",
  });
  tableHTML.width = "100%";

  tableHTML.innerHTML = `
    <thead>
      <tr>
        <th width="5%">#</th>
        <th>Product Name</th>
        <th width="20%">Price</th>
        <th width="20%">Quantity</th>
        <th width="20%">Total</th>
        <th width="5%">Delete</th>
      </tr>
    </thead>
  `;

  const tbody = document.createElement("tbody");

  totalCart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    totalQuantity += item.quantity;
    totalPrice += itemTotal;

    const tr = document.createElement("tr");
    tr.innerHTML = `
     <td>${index + 1}</td>
      <td>${item.name}</td>
      <td>${item.price.toLocaleString("vi-VN")}</td>
      <td>
        <input type="number" 
               class="quantity" 
               data-id="${item.id}" 
               value="${item.quantity}" 
               min="1"
               style="width:60px;text-align:center">
      </td>
      <td>${itemTotal.toLocaleString("vi-VN")}</td>
      <td>
        <button type="button" class="delete-item" data-id="${
          item.id
        }">Del</button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  const tfoot = document.createElement("tfood");
  tfoot.innerHTML = `
    <tr>
      <td colspan="3"><strong>Summary</strong></td>
      <td><strong>${totalQuantity}</strong></td>
      <td colspan="2"><strong>${totalPrice.toLocaleString(
        "vi-VN"
      )}</strong></td>
    </tr>
  `;

  tableHTML.append(tbody, tfoot);
  cartContainer.appendChild(tableHTML);
}
