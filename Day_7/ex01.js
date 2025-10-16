// const f8 = {
//   start: function (x) {
//     let res = x;
//     return {
//       add(input) {
//         res = res + input;
//         return this;
//       },
//       minus(input) {
//         res = res - input;
//         return this;
//       },
//       multi(input) {
//         res = res * input;
//         return this;
//       },
//       divi(input) {
//         res = res / input;
//         return this;
//       },
//       get() {
//         return res;
//       },
//     };
//   },
// };

// console.log(f8.start(10).add(20).get());

// const f8 = {
//   start: (val) => {
//     let res = val;
//     return {
//       add(input) {
//         res = res + input;
//         return this;
//       },
//       minus(input) {
//         res = res - input;
//         return this;
//       },
//       multi(input) {
//         res = res * input;
//         return this;
//       },
//       divi(input) {
//         res = res / input;
//         return this;
//       },
//       get() {
//         return res;
//       },
//       getX() {
//         return this;
//       },
//     };
//   },
// };

// console.log(f8.start(1).getX());

//setter, getter

const myObj = {
  n: 10,
  get length() {
    return n;
  },
  set length(val) {
    this.n = val;
  },
};
console.log(x);
