import { Console } from '@woowacourse/mission-utils';
import ValidationController from '../validation/Validation.controller.js';

export default class OutPutService {
  #validationController;

  constructor() {
    this.#validationController = new ValidationController();
  }

  printTicketCount(message) {
    Console.print(message);
  }

  printTickets(tickets) {
    this.#validationController.validatePurchasedTickets(tickets);
    tickets.forEach((ticket) => {
      const OUTPUT = '[' + ticket.join(', ') + ']';
      Console.print(OUTPUT);
    });
  }
}
