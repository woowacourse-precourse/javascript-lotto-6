import IO from "../Util/IOHandler.js";
import Generator from "./Generator.js";

export default class Printer {
  #ticket;
  #unit = {
    LOTTO_PRICE: 1000,
  };

  constructor(number) {
    this.Generator = new Generator();
    this.amount = this.getAmount(number);
    this.pack();
    this.print();
  }

  getAmount(money) {
    const amount = parseInt(money, 10) / this.#unit.LOTTO_PRICE;
    IO.print(`${amount}개를 구매했습니다.`);
    return amount;
  }

  pack() {
    this.#ticket = [];

    let index = 0;
    while (index < this.amount) {
      const random = this.Generator.random();
      const lotto = this.Generator.lotto(random);
      this.#ticket.push(lotto);
      index += 1;
    }
  }

  print() {
    let index = 0;
    while (index < this.amount) {
      IO.print(`[${this.#ticket[index].show().join(", ")}]`);
      index += 1;
    }
  }

  getTicket() {
    return this.#ticket;
  }
}
