const transactions = [
  { id: 1, account: "A", type: "deposit", amount: 1000 },
  { id: 2, account: "B", type: "withdraw", amount: 200 },
  { id: 3, account: "A", type: "withdraw", amount: 500 },
  { id: 4, account: "C", type: "deposit", amount: 700 },
  { id: 5, account: "B", type: "deposit", amount: 300 },
];

//Giả su số tiền ban đầu của các tài khoản đều = 0

const r1 = transactions.reduce((acc, x) => {
  if (!acc[x.account]) {
    acc[x.account] = 0;
  }
  if (x.type == "deposit") {
    acc[x.account] += x.amount;
  } else {
    acc[x.account] -= x.amount;
  }
  return acc;
}, {});

console.log(r1);

// Tìm số tk có số dư cao nhất
function highestAccount(obj) {
  let res = null;
  let flagCount = 0;

  for (let [acc, balance] of Object.entries(obj)) {
    if (balance > flagCount) {
      res = acc;
      flagCount = balance;
    }
  }
  return {
    acc: res,
    balance: flagCount,
  };
}

const r2 = highestAccount(r1);
console.log(r2);
