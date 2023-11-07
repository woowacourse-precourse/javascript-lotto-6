import IO from "../Util/IOHandler.js";
import Generator from "./Generator.js";
import Constants from "../Util/Constants.js";

export default class Printer {
  #ticket;

  #unit = {
    LOTTO_PRICE: 1000,
  };

  constructor(number) {
    this.amount = this.getAmount(number);
    this.pack();
    this.print();
  }

  getAmount(money) {
    const amount = parseInt(money, 10) / this.#unit.LOTTO_PRICE;
    IO.print(`${amount}${Constants.output.confirmAmount}`);
    return amount;
  }

  pack() {
    this.#ticket = [];

    let index = 0;
    while (index < this.amount) {
      const random = Generator.random();
      const lotto = Generator.lotto(random);
      this.#ticket.push(lotto);
      index += 1;
    }
  }

  print() {
    let index = 0;
    while (index < this.amount) {
      const unpackedLotto = this.#ticket[index];
      IO.print(`[${unpackedLotto.get().join(", ")}]`);
      index += 1;
    }
    IO.print("");
  }

  getTicket() {
    return this.#ticket;
  }
}
