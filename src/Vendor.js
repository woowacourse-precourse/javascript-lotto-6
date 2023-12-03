import Computer from './Computer.js';
import { LOTTO_RULE } from './constants/constants.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';

export default class Vendor {
  async isssueTickets() {
    const tickets = await this.#getNumberOfTickets();
    const issuedTickets = [];
    for (let i = 0; i < tickets; i += 1) {
      const ticket = Computer.getRandomSixNumbers();
      ticket.sort((a, b) => a - b);
      issuedTickets.push(ticket);
    }
    OutputView.printTickets(issuedTickets);
    return issuedTickets;
  }

  async #getNumberOfTickets() {
    try {
      const paid = await InputView.getPurchaseAmount();
      if (!Number.isInteger(paid)) {
        throw new Error('[ERROR] 정수만 입력 가능합니다.');
      }
      if (
        paid < LOTTO_RULE.ticketPrice ||
        paid % LOTTO_RULE.ticketPrice !== 0
      ) {
        throw new Error('[ERROR] 1000원 단위로 구매 가능합니다.');
      }
      return paid / LOTTO_RULE.ticketPrice;
    } catch (error) {
      OutputView.printErrors(error);
      return this.#getNumberOfTickets();
    }
  }
}
