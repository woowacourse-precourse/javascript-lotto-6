import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, INPUT_MESSAGE } from '../constants/index.js';

class Lotto {
  amount;
  tickets = [];
  constructor(numbers) {}

  async buy() {
    this.#readBuyAmount();
    const ticketCount = this.#getNumberOfAvailableTickets();
    for (let i = 0; i < ticketCount; i++) {
      this.#publishLottoTicket();
    }
    this.#printAllTickets();
  }

  async setWinningNumbers() {}

  async getResult() {}

  printPrize() {}

  printRateOfRevenue() {}

  async #readBuyAmount() {
    const amountInput = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGE.GET_BUY_AMOUNT + '\n',
    );
    const amount = this.#convertToNumber(amountInput);
    this.#validateBuyUnit(amount);
    this.amount = amount;
  }

  #convertToNumber(numberString) {
    const number = parseInt(numberString);
    if (!number) {
      throw new Error(ERROR_MESSAGE.NOT_NUMBER);
    }
    return number;
  }

  #validateBuyUnit(amount) {
    if (amount % 1000 > 0) {
      throw new Error(ERROR_MESSAGE.BUY_AMOUNT_ERROR);
    }
  }

  #validateNumberOfInputs(input) {}

  #validateIsInRange(input) {}

  #getNumberOfAvailableTickets(amount) {}

  #publishLottoTicket() {
    const ticket = new LottoTicket();
    this.tickets.push(ticket);
    console.log(ticket);
  }

  #printAllTickets() {}

  #readWinningNumbers() {}

  #readWinningBonusNumber() {}

  #getRank() {}
}

class LottoTicket {
  numbers = [];
  constructor() {}

  generateLottoNumbers() {}

  getNumberOfMatchedNumbers() {}

  getIsBonusNumberMatched() {}

  printNumbers() {}
}

export default Lotto;
