/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const newTransaction = {};
    newTransaction.amount = amount;
    newTransaction.type = type;
    // console.table(newTransaction);
    if (type === "deposit") {
      this.balance += amount;
    } else {
      this.balance -= amount;
    }
    return newTransaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    // this.balance += amount;

    this.transactions.push(this.createTransaction(amount, "deposit"));
    // console.log(this.balance);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (this.balance > amount) {
      //   this.balance -= amount;
      this.transactions.push(this.createTransaction(amount, "withdraw"));
      //   console.log(this.balance);
    } else {
      alert`No BABOSSO`;
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    return this.transactions[id];
  },
  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;
    // console.log(total);
    // console.table(this.transactions);
    // console.log(this.transactions.length);
    for (let i = 0; i < this.transactions.length; i++) {
      let newArr = {};
      newArr = this.transactions[i];
      //   console.log(newArr);
      //   console.table(newArr.amount);
      //   console.log(newArr.type);
      if (newArr.type === type) {
        total += newArr.amount;
      }
    }
    return total;
  },
};
// console.log(account);
account.createTransaction(3000, `deposit`);
account.deposit(1000);
account.withdraw(500);
// console.log(account.transactions);
account.deposit(8000);
account.deposit(500);
account.withdraw(250);
// console.table(account.transactions);
account.getTransactionTotal("deposit");
console.log(account.getTransactionTotal("deposit"));
// console.log(account.balance);
// console.log(account.transactions);
console.log(account.getTransactionTotal("withdraw"));
