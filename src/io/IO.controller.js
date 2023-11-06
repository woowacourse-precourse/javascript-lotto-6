import { TICKET_COUNT_MESSAGE } from '../constants.js';
import InputService from './Input.service.js';
import OutPutService from './Output.service.js';
import ValidationController from '../validation/Validation.controller.js';

export default class IOController {
  #InputService;
  #OutputService;
  #ValidationController;

  constructor() {
    this.#InputService = new InputService();
    this.#OutputService = new OutPutService();
    this.#ValidationController = new ValidationController();
  }

  async readAmount() {
    const MONEY = await this.#InputService.readAmount();
    this.#ValidationController.validateInputMoney(MONEY);
    return +MONEY;
  }

  async readWinningNumbers() {
    const NUMBERS = await this.#InputService.readWinningNumbers();
    return NUMBERS.split(',').map((num) => +num);
  }

  async readBonusNumber() {
    const BONUS = await this.#InputService.readBonusNumber();
    return +BONUS;
  }

  printTicketCount(tickets) {
    this.#OutputService.printTicketCount(`\n${tickets}` + TICKET_COUNT_MESSAGE);
  }

  printTickets(tickets) {
    this.#OutputService.printTickets(tickets);
  }
}
