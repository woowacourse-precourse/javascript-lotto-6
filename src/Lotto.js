import { MissionUtils } from '@woowacourse/mission-utils';
import {
  ERROR_MESSAGE,
  INPUT_MESSAGE,
  LOTTO_VALUE,
} from '../constants/index.js';

class Lotto {
  #amount;
  #tickets = [];

  constructor(numbers) {}

  async buy() {
    await this.#readBuyAmount();
    const ticketCount = this.#getNumberOfAvailableTickets(this.#amount);
    for (let i = 0; i < ticketCount; i++) {
      this.#publishLottoTicket();
    }
    console.log('\n' + `${ticketCount}개를 구매했습니다.`);
    this.#printAllTickets();
  }

  async setWinningNumbers() {
    await this.#readWinningNumbers();
    await this.#readWinningBonusNumber();
  }

  async getResult() {}

  printPrize() {}

  printRateOfRevenue() {}

  async #readBuyAmount() {
    const amountInput = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGE.GET_BUY_AMOUNT + '\n',
    );
    const amount = this.#convertToNumber(amountInput);
    this.#validateBuyUnit(amount);
    this.#amount = amount;
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

  #validateIsInRange(numbers, startNumber, endNumber) {
    numbers.forEach(number => {
      if (number < startNumber || number > endNumber) {
        throw new Error(ERROR_MESSAGE.NOT_IN_RANGE);
      }
    });
  }

  #getNumberOfAvailableTickets(amount) {
    return amount / LOTTO_VALUE.TICKET_PRICE;
  }

  #publishLottoTicket() {
    const ticket = new LottoTicket();
    this.#tickets.push(ticket);
  }

  #printAllTickets() {
    this.#tickets.forEach(ticket => {
      ticket.printNumbers();
    });
  }

  async #readWinningNumbers() {
    const WINNING_NUMBERS_COUNT = 6;
    const DELIMITER = ',';

    const winningNumbersInput = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGE.GET_WINNING_NUMBERS + '\n',
    );
    this.#validateNumberOfInputs(
      winningNumbersInput,
      WINNING_NUMBERS_COUNT,
      DELIMITER,
    );

    const inputs = winningNumbersInput.split(DELIMITER);
    const winningNumbers = this.#convertToIntegerArray(inputs);

    this.#validateIsInRange(
      winningNumbers,
      LOTTO_VALUE.START_NUMBER,
      LOTTO_VALUE.END_NUMBER,
    );
  }

  #validateNumberOfInputs(stringInput, numberOfInputs, delimiter) {
    const elements = stringInput.split(delimiter);
    if (elements.length !== numberOfInputs) {
      throw new Error(ERROR_MESSAGE.NUMBER_OF_ELEMENTS_ERROR);
    }
  }

  #convertToIntegerArray(stringInputs) {
    const numbers = stringInputs.map(stringInput => {
      const number = parseInt(stringInput);
      if (!number) {
        throw new Error(ERROR_MESSAGE.WINNING_BALL_INPUT_ERROR);
      }
      return parseInt(stringInput);
    });
    return numbers;
  }

  #readWinningBonusNumber() {}

  #getRank() {}
}

class LottoTicket {
  #numbers = [];
  constructor() {
    this.#numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  generateLottoNumbers() {}

  getNumberOfMatchedNumbers() {}

  getIsBonusNumberMatched() {}

  printNumbers() {
    const numbers = this.#numbers.join(',');
    console.log(`[${numbers}]`);
  }
}

export default Lotto;
