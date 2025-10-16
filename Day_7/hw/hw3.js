const orders = [
  {
    orderId: 101,
    customer: "John",
    items: [
      { name: "Phone", price: 400, quantity: 2 },
      { name: "Laptop", price: 1000, quantity: 1 },
    ],
  },
  {
    orderId: 102,
    customer: "Alice",
    items: [
      { name: "Phone", price: 500, quantity: 2 },
      { name: "Charger", price: 50, quantity: 3 },
    ],
  },
  {
    orderId: 103,
    customer: "Bob",
    items: [{ name: "Headphones", price: 200, quantity: 2 }],
  },
];

function sumPrice(arr) {
  let res = [];
  arr.map((a) => {
    let flag = 0;
    a.items.map((item) => {
      flag += item.price;
    });
    res.push(flag);
  });
  return res;
}

const r1 = sumPrice(orders);

//merge
for (let i = 0; i < orders.length; i++) {
  orders[i].sumPrice = r1[i];
}

function highestPrice(arr) {
  let res = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (res.sumPrice < arr[i].sumPrice) {
      res = arr[i];
    }
  }
  return res;
}

const r2 = highestPrice(orders);

function checkItem(res, item) {
  for (let i = 0; i < res.length; i++) {
    if (res[i].name == item.name) {
      return i;
    }
  }
  return -1;
}

function productList(arr) {
  let res = [];
  arr.map((a) => {
    a.items.map((item) => {
      if (checkItem(res, item) == -1) {
        res.push(item);
      } else {
        res[checkItem(res, item)].price += item.price;
        res[checkItem(res, item)].quantity += item.quantity;
      }
    });
  });
  return res;
}

console.log(productList(orders));
