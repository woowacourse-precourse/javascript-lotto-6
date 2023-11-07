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
    try {
      const MONEY = await this.#InputService.readAmount();
      this.#ValidationController.validateInputMoney(MONEY);
      return +MONEY;
    } catch (err) {
      this.#OutputService.printErrorMessage(err.message);
      return await this.readAmount();
    }
  }

  async readWinningNumbers() {
    try {
      const INPUT = await this.#InputService.readWinningNumbers();
      const NUMBERS = INPUT.split(',').map((num) => +num);
      this.#ValidationController.validateWinningNumbers(NUMBERS);
      return NUMBERS;
    } catch (err) {
      this.#OutputService.printErrorMessage(err.message);
      return await this.readWinningNumbers();
    }
  }

  async readBonusNumber(winningNumbers) {
    try {
      const INPUT = await this.#InputService.readBonusNumber();
      const BONUS = +INPUT;
      this.#ValidationController.validateBonusNumber(BONUS, winningNumbers);
      return BONUS;
    } catch (err) {
      this.#OutputService.printErrorMessage(err.message);
      return await this.readBonusNumber(winningNumbers);
    }
  }

  printTicketCount(tickets) {
    this.#OutputService.printTicketCount(tickets);
  }

  printTicket(ticket) {
    this.#OutputService.printTickets(ticket);
  }

  printStatIntro() {
    this.#OutputService.printStatIntro();
  }

  printHitStatistics(hits) {
    this.#OutputService.printHitStatistics(hits);
  }

  printRateOfReturn(rate) {
    this.#OutputService.printRateOfReturn(rate);
  }
}
