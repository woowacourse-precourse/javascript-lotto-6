import { Console } from "@woowacourse/mission-utils";
import { PRIZE, TICKET_PRICE } from './Constant.js'

class MoneyManager {
  #first = 0;
  #bonus = 0;
  #second = 0;
  #third = 0;
  #fourth = 0;
  #fail = 0;
  #rateOfInterest;

  addTicket(matchingNumbers, bonus) {
    if (matchingNumbers <= 2) this.#fail += 1;
    else if (matchingNumbers === 3) this.#fourth += 1;
    else if (matchingNumbers === 4) this.#third += 1;
    else if (matchingNumbers === 5 && bonus === false) this.#second += 1;
    else if (matchingNumbers === 5 && bonus === true) this.#bonus += 1;
    else if (matchingNumbers === 6) this.#first += 1;
  }

  calculateMoneyEarned() {
    let earned = 0;
    earned += this.#fourth * PRIZE.FOURTH;
    earned += this.#third * PRIZE.THIRD;
    earned += this.#second * PRIZE.SECOND;
    earned += this.#bonus * PRIZE.BONUS;
    earned += this.#first * PRIZE.FIRST;

    return earned;
  }

  calculateStatistics() {
    let totalTickets = this.#fail + this.#fourth + this.#third + this.#second + this.#bonus + this.#first;
    let investment = totalTickets * TICKET_PRICE;
    let earned = this.calculateMoneyEarned();
    this.#rateOfInterest = ((earned / investment) * 100).toFixed(2);
  }
}

export default MoneyManager;