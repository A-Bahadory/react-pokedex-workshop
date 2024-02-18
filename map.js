const product = [
  {
    name: "laptop",
    price: 1000,
    count: 5,
  },
  {
    name: "desktop",
    price: 1500,
    count: 2,
  },
  {
    name: "phone",
    price: 500,
    count: 2,
  },
];

const productValue = product.map((item) => ({
  productPrice: item.price * item.count,
  name: item.name,
}));
console.log(productValue);
