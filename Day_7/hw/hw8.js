const reviews = [
  { productId: "P1", userId: "U1", rating: 5 },
  { productId: "P2", userId: "U2", rating: 4 },
  { productId: "P1", userId: "U3", rating: 3 },
  { productId: "P3", userId: "U1", rating: 4 },
  { productId: "P2", userId: "U3", rating: 2 },
  { productId: "P1", userId: "U2", rating: 4 },
];

const products = {};
reviews.forEach((review) => {
  if (!products[review.productId]) {
    products[review.productId] = [];
  }
  products[review.productId].push({
    userId: review.userId,
    rating: review.rating,
  });
});

function addAvgRating(obj) {
  for (let [product, rating] of Object.entries(obj)) {
    let sum = 0;
    for (let r of rating) {
      sum += r.rating;
    }
    products[product].push({
      avg: sum / rating.length,
    });
  }
}

addAvgRating(products);
console.log(products);

function findHighestAvgRating(obj) {
  let resProduct = null;
  let flagRating = 0;

  for (let [product, ratings] of Object.entries(obj)) {
    const avgObj = ratings[ratings.length - 1];
    const avg = avgObj.avg;

    if (avg > flagRating) {
      flagRating = avg;
      resProduct = product;
    }
  }

  return {
    highestProduct: resProduct,
    Rate: flagRating,
  };
}

console.log(findHighestAvgRating(products));

// Ý cuối khá giống cách làm 1 nên thoii
