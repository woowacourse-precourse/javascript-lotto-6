import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import IOController from './io/IO.controller.js';
import { TICKET_PRICE } from './constants.js';

export default class AppService {
  #IOController;

  constructor() {
    this.#IOController = new IOController();
  }

  async play() {
    const NUMBER_OF_TICKETS = await this.#getNumberOfTickets();
    const PURCHASED = this.#buyTickets(NUMBER_OF_TICKETS);
  }

  async #getNumberOfTickets() {
    const MONEY = await this.#IOController.readAmount();
    return Math.floor(MONEY / TICKET_PRICE);
  }

  #buyTickets(tickets) {
    this.#IOController.printTicketCount(tickets);
    const purchased = [];
    for (let i = 0; i < tickets; ++i) {
      purchased.push(this.pickNumbers());
    }
    this.#IOController.printTickets(purchased);
    return purchased;
  }

  pickNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
  }
}
