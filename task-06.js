`use strict`;
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

// console.log(products[0].name);
const calculateTotalPrice = function (allProdcuts, productName) {
  let totalPrice = 0;
  for (let i = 0; i < allProdcuts.length; i++) {
    const product = allProdcuts[i];
    // console.log(allProdcuts[i]);
    const values = Object.values(product);
    for (const value of values) {
      //   console.log(value);
      if (value === productName) {
        totalPrice = product.price * product.quantity;
        break;
      }
    }
  }

  return totalPrice;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(calculateTotalPrice(products, "Радар")); // 5200

console.log(calculateTotalPrice(products, "Дроид")); // 2800
