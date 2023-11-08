import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import {
  ERROR_MESSAGE,
  INPUT_MESSAGE,
  LOTTO_VALUE,
  PRIZE_BY_RANK,
  WINNING_CONDITION_BY_RANK,
} from '../constants/index.js';
import { verifyIsNumber, numberWithCommas } from './utils.js';

class App {
  #amount;
  #tickets = [];
  #winningNumbers = [];
  #bonusNumber;
  #rankCount;

  async play() {
    try {
      await this.buy();
      await this.setWinningNumbers();
      this.printResult();
    } catch (e) {
      MissionUtils.Console.print(e.message);
    }
  }

  async buy() {
    await this.#readBuyAmount();
    const ticketCount = this.#getNumberOfAvailableTickets(this.#amount);
    for (let i = 0; i < ticketCount; i++) {
      this.#publishLotto();
    }

    MissionUtils.Console.print(`${ticketCount}개를 구매했습니다.`);
    this.#printAllTickets();
  }

  async setWinningNumbers() {
    await this.#readWinningNumbers();
    await this.#readWinningBonusNumber();
  }

  async printResult() {
    MissionUtils.Console.print('\n당첨 통계');
    MissionUtils.Console.print('---');
    this.#getResult();
    this.#printPrize();
    this.#printRateOfRevenue();
  }

  #getResult() {
    const rankCount = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };
    this.#tickets.forEach(ticket => {
      const rank = ticket.getRank(this.#winningNumbers, this.#bonusNumber);

      if (rank) {
        rankCount[rank] = rankCount[rank] + 1;
      }
    });
    this.#rankCount = rankCount;
  }

  #getRevenue() {
    let revenue = 0;

    for (const [rank, numberOfPeople] of Object.entries(this.#rankCount)) {
      if (numberOfPeople > 0) {
        revenue += PRIZE_BY_RANK[rank];
      }
    }
    return revenue;
  }

  #getNumberOfAvailableTickets(amount) {
    return amount / LOTTO_VALUE.TICKET_PRICE;
  }

  async #readBuyAmount() {
    const amountInput = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGE.GET_BUY_AMOUNT + '\n',
    );
    const amount = this.#convertToNumber(amountInput);
    this.#validateBuyUnit(amount);
    this.#amount = amount;
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

    winningNumbers.forEach(winningNumber => {
      this.#validateIsInRange(
        winningNumber,
        LOTTO_VALUE.START_NUMBER,
        LOTTO_VALUE.END_NUMBER,
      );
    });

    this.#winningNumbers = winningNumbers;
  }

  async #readWinningBonusNumber() {
    const bonusNumberInput = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGE.GET_WINNING_BONUS_NUMBER + '\n',
    );
    this.#validateIsNumber(bonusNumberInput);

    const bonusNumber = parseInt(bonusNumberInput);
    this.#validateIsInRange(
      bonusNumber,
      LOTTO_VALUE.START_NUMBER,
      LOTTO_VALUE.END_NUMBER,
    );

    if (this.#winningNumbers.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.BONUS_WINNING_NUMBERS_DUPLICATED);
    }
    this.#bonusNumber = bonusNumber;
  }

  #validateBuyUnit(amount) {
    if (amount % 1000 > 0) {
      throw new Error(ERROR_MESSAGE.BUY_AMOUNT_ERROR);
    }
  }

  #validateIsNumber(stringValue) {
    const isNumber = !Number.isNaN(stringValue);
    if (!isNumber) {
      throw new Error(ERROR_MESSAGE.NOT_NUMBER);
    }
  }

  #validateIsInRange(number, startNumber, endNumber) {
    if (number < startNumber || number > endNumber) {
      throw new Error(ERROR_MESSAGE.NOT_IN_RANGE);
    }
  }

  #validateNumberOfInputs(stringInput, numberOfInputs, delimiter) {
    const elements = stringInput.split(delimiter);
    if (elements.length !== numberOfInputs) {
      throw new Error(ERROR_MESSAGE.NUMBER_OF_ELEMENTS_ERROR);
    }
  }

  #convertToNumber(numberString) {
    this.#validateIsNumber(numberString);
    const number = parseInt(numberString);
    return number;
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

  #publishLotto() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    const ticket = new Lotto(numbers);
    this.#tickets.push(ticket);
  }

  #printAllTickets() {
    this.#tickets.forEach(ticket => {
      ticket.printNumbers();
    });
  }

  #printPrize() {
    const NUMBER_OF_RANKS = 5;
    for (let i = NUMBER_OF_RANKS; i > 0; i--) {
      const condition = WINNING_CONDITION_BY_RANK[i];
      const prize = `(${numberWithCommas(PRIZE_BY_RANK[i])}원)`;
      const count = this.#rankCount[i];
      MissionUtils.Console.print(`${condition} ${prize} - ${count}개`);
    }
  }

  #printRateOfRevenue() {
    const revenue = this.#getRevenue();
    const cost = this.#amount;
    const rateOfRevenue = parseFloat(((revenue / cost) * 100).toFixed(2));
    MissionUtils.Console.print(`총 수익률은 ${rateOfRevenue}%입니다.`);
  }
}

export default App;
