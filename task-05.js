`use strict`;

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  const allProp = [];
  // console.log(prop);

  for (let i = 0; i < arr.length; i++) {
    const newArr = arr[i];
    // console.log(newArr);
    for (const key in newArr) {
      // console.log(key);
      // console.log(newArr[key]);
      if (key === prop) {
        // console.log(newArr[key]);
        allProp.push(newArr[key]);
      }
    }
  }
  // console.log(allProp);
  return allProp;
};
// console.log(products[0].name);
// getAllPropValues(products, "name");
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

console.log(getAllPropValues(products, "category")); // []
