const products = [
  { name: "Laptop", price: 15000000 },

  { name: "Mouse", price: 250000 },

  { name: "Keyboard", price: 800000 },
];

// Tạo mảng mới chỉ chứa tên sản phàm
const productNames = [];
for (let product of products) {
  productNames.push(product.name);
}
console.log(productNames);

// Tính tổng giá trị sản phẩm
let sumPrice = 0;
products.forEach((product) => {
  sumPrice += product.price;
});
console.log(sumPrice);

// Lọc sp có giá lớn hơn 1 củ
const expensiveProduct = products.filter((product) => {
  if (product.price > 1000000) {
    return product;
  }
});
console.log(expensiveProduct);
