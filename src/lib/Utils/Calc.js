import { GAME_RULE, MATCH_TO_PRIZE, PRIZE_TO_REWARD } from "../Constants.js";

class Calc {
  static ticketQuantity(money) {
    return parseInt(money / GAME_RULE.TICKET_PRICE);
  }

  static prizeMap(ticketItems, winNumbers, bonusNumber) {
    const prizeMap = new Map();
    const winNumbersSet = new Set(winNumbers);
    ticketItems.forEach((ticket) => {
      const prize = Calc.#prize(ticket, winNumbersSet, bonusNumber);
      const value = prizeMap.get(prize) ?? 0;
      prizeMap.set(prize, value + 1);
    });
    return prizeMap;
  }

  static winRate(prizeMap) {
    const earnings = Array.from(prizeMap.entries())
      .map(([prize, count]) => PRIZE_TO_REWARD[prize] * count)
      .reduce((a, b) => a + b);
    const ticketSize = Array.from(prizeMap.entries())
      .map(([_, count]) => count)
      .reduce((a, b) => a + b);
    const ticketMoney = ticketSize * GAME_RULE.TICKET_PRICE;
    return (earnings / ticketMoney) * 100;
  }

  static #prize(ticket, winNumberSet, bonus) {
    const match = Calc.#match(ticket, winNumberSet);
    const bonusFlag = ticket.includes(bonus);
    const prize = MATCH_TO_PRIZE[match][bonusFlag];
    return prize;
  }

  static #match(ticket, winNumberSet) {
    return ticket.filter((number) => winNumberSet.has(number)).length;
  }
}

export default Calc;
