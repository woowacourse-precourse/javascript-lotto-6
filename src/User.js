import Validation from './utils/Validation.js';

class User {
  #money;
  #tickets;

  constructor() {
    this.#money = 0;
    this.#tickets = [];
  }

  #validateUserMoney(money) {
    Validation.validateInputNumber(money);
    Validation.validateInputZeroOrLess(money);
    Validation.validateInputThousands(money);
  }

  setMoney(money) {
    this.#validateUserMoney(money);
    this.#money = money;
  }

  getMoney() {
    return this.#money;
  }

  setTickets(tickets) {
    this.#tickets = tickets;
  }

  getTickets() {
    return this.#tickets;
  }
}

export default User;
