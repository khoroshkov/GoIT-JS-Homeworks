'use strict';

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  balance: 0,
  transactions: [
    { id: 'id-1', type: 'deposit', amount: 10 },
    { id: 'id-2', type: 'deposit', amount: 20 },
    { id: 'id-3', type: 'deposit', amount: 30 },
    { id: 'id-4', type: 'withdraw', amount: 20 },
    { id: 'id-4', type: 'withdraw', amount: 10 },
  ],

  /*
   * Метод отвечающий за добавление суммы к балансу
   * Создает объект транзакции и вызывает addTransaction
   */
  deposit(amount) {

    this.balance += amount;

    //===== Вариант добавления суммы по типу транзакции (если они уже записаны в объект)=====//
    // for (const transaction of this.transactions) {
    //   if (transaction.type === 'deposit') {
    //     this.balance += transaction.amount;
    //   }
    // }
    return this.balance;
  },


  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Создает объект транзакции и вызывает addTransaction
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log('На Ващем счету недостаточно средств для проведения операции');
    }
    return this.balance;
  },

  /*
   * Метод добавляющий транзацию в свойство transactions
   * Принимает объект трназкции
   */
  addTransaction(transaction) {
    this.transactions.push(transaction);
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
    for (let i = 0; i < this.transactions.length; i += 1) {
      const transaction = this.transactions[i];
      if (transaction.id === id) {
        return transaction;
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }
    return total;
  },
};

console.log(account.deposit(100));
account.addTransaction({ id: 'id-4', type: 'deposit', amount: 100 });
console.log(account.transactions);
console.log(account.withdraw(60));
console.log(account.getBalance());
console.log(account.getTransactionTotal('deposit'));
console.log(account.getTransactionDetails('id-4'));