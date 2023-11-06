import { Console } from "@woowacourse/mission-utils";
import { PRIZE, PRIZE_STRING, TICKET_PRICE } from './Constant.js'

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
    this.#rateOfInterest = ((earned / investment) * 100).toFixed(1);
  }

  printStatistics() {
    Console.print('당첨 통계\n');
    Console.print('---\n');
    Console.print(`3개 일치 (${PRIZE_STRING.FOURTH}) - ${this.#fourth}개\n`);
    Console.print(`4개 일치 (${PRIZE_STRING.THIRD}) - ${this.#third}개\n`);
    Console.print(`5개 일치 (${PRIZE_STRING.SECOND}) - ${this.#second}개\n`);
    Console.print(`5개 일치, 보너스 볼 일치 (${PRIZE_STRING.BONUS}) - ${this.#bonus}개\n`);
    Console.print(`6개 일치 (${PRIZE_STRING.FIRST}) - ${this.#first}개\n`);
    Console.print(`총 수익률은 ${this.#rateOfInterest}%입니다.\n`);
  }
}

export default MoneyManager;