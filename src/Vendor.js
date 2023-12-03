import Computer from './Computer';
import { LottoRule } from './constants/constants';
import InputView from './views/InputView';

export default class Vendor {
  async isssueTickets() {
    const tickets = await this.#getNumberOfTickets();
    const issuedTickets = [];
    for (let i = 0; i < tickets; i += 1) {
      const ticket = Computer.getRandomSixNumbers();
      issuedTickets.push(ticket);
    }
    return issuedTickets;
  }

  async #getNumberOfTickets() {
    const paid = await InputView.getPurchaseAmount();
    if (!Number.isInteger(paid)) {
      throw new Error('[ERROR] 정수만 입력 가능합니다.');
    }
    if (paid < LottoRule.ticketPrice || paid % LottoRule.ticketPrice !== 0) {
      throw new Error('[ERROR] 1000원 단위로 구매 가능합니다.');
    }
    return paid / LottoRule.ticketPrice;
  }
}
