const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1200 },
  { id: 2, name: "Phone", category: "Electronics", price: 800 },
  { id: 3, name: "Shirt", category: "Clothing", price: 40 },
  { id: 4, name: "Shoes", category: "Clothing", price: 60 },
  { id: 5, name: "Headphones", category: "Electronics", price: 150 },
];

let r1 = products.filter((product) => {
  if (product.category == "Electronics") {
    return product;
  }
});

let r2 = r1.reduce((res, val) => val.price + res, 0);

function convertObject(myArr) {
  let res = {};
  let newKey = [];
  for (let a of myArr) {
    if (!newKey.includes(a.category)) {
      newKey.push(a.category);
      res[a.category] = [];
    }
    res[a.category].push({
      id: a.id,
      name: a.name,
      price: a.price,
    });
  }
  return res;
}

let r3 = convertObject(products);

console.log(r1, r2, r3);
