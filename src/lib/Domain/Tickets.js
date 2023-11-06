// validator
import DomainValidator from "../Validator/DomainValidator.js";
// utils
import Calc from "../Utils/Calc.js";
import { Random } from "@woowacourse/mission-utils";
// constants
import { ERROR_MESSAGE, GAME_RULE } from "../Constants.js";

class Tickets {
  #items;
  #result;

  constructor(ticketMoney) {
    this.#validate(ticketMoney);
    const quantity = Calc.ticketQuantity(ticketMoney);
    this.#items = Array.from({ length: quantity }, () => this.#pickTicket());
  }

  #validate(ticketMoney) {
    DomainValidator.ticketMoney(ticketMoney);
  }

  #pickTicket() {
    const [min, max, size] = [
      GAME_RULE.MIN_WIN_NUMBER_INCLUSIVE,
      GAME_RULE.MAX_WIN_NUMBER_INCLUSIVE,
      GAME_RULE.WIN_NUMBERS_SIZE,
    ];
    const ticket = Random.pickUniqueNumbersInRange(min, max, size);
    return ticket.sort((a, b) => a - b);
  }

  get items() {
    return this.#items;
  }

  set result(value) {
    if (this.#result) throw new Error(ERROR_MESSAGE.FIELD_ALREADY_INITIALIZED);
    this.#result = value;
  }

  get result() {
    return this.#result;
  }
}

export default Tickets;
