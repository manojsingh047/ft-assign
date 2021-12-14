const dummy = new Array(100).fill(0).map((_, i) => ({
  productId: i,
  product: "Roadster Men Black Nepped Round Neck T-shirt",
  productName: "Roadster Men Black Nepped Round Neck T-shirt",
  brand: "Roadster",
  additionalInfo: "Nepped Round Neck T-shirt",
  searchImage:
    "http://assets.myntassets.com/assets/images/2310365/2018/2/1/11517487630366-Roadster-Men-Black-Solid-Round-Neck-T-shirt-5871517487630224-1.jpg",
  price: 102 + i * 100,
}));

module.exports = {
  dummy,
};
