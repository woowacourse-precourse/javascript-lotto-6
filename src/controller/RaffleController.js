import MESSAGES from '../constants/Messages.js';
import RaffleService from '../service/RaffleService.js';
import View from '../utils/View.js';

export default class RaffleController {
  #raffleService;

  constructor() {
    this.#raffleService = new RaffleService();
  }

  async raffleNumber() {
    while (true) {
      const numbers = await View.getInputByQuestion(MESSAGES.inputWinningNumbers);
      try {
        this.#raffleService.raffleNumbers(numbers);
        break;
      } catch (error) {
        View.printOutput(error.message);
      }
    }
  }

  async raffleBonus() {
    while (true) {
      const number = await View.getInputByQuestion(MESSAGES.inputBonusNumber);
      try {
        this.#raffleService.raffleBonus(number);
        break;
      } catch (error) {
        View.printOutput(error.message);
      }
    }
  }

  getRaffle() {
    return this.#raffleService.getRaffle();
  }
}