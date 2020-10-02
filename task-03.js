const findBestEmployee = function (employees) {
  const values = Object.values(employees);
  //   console.log(values);

  const maxTaskQuantity = Math.max(...values);
  //   console.log(maxTaskQuantity);

  for (const key in employees) {
    // console.log(key);
    // console.log(employees[key]);
    if (employees[key] === maxTaskQuantity) {
      return key;
    }
  }

  return;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
