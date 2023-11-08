import { MissionUtils } from '@woowacourse/mission-utils';
import { USER_INPUT, ANNOUNCEMENT, ERROR } from './message.js';
import { LOTTO_PRICE, RANKING, PRIZE } from './constant.js';
import Lotto from './Lotto.js';

export default class LottoMachine {
  #purchaseAmount;
  #winningNumbers;
  #bonusNumber;

  constructor() {
    this.lottos = [];
    this.winningDetails = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
  }

  async sell() {
    await this.#receiveMoney();

    const salesQuantity = this.#purchaseAmount / LOTTO_PRICE;
    this.#printSalesQuantity(salesQuantity);

    for (let i = 0; i < salesQuantity; i++) {
      this.#generateNumbers();
    }
    this.#printNumbers();

    await this.#setWinningNumbers();
    await this.#setBonusNumber();
  }

  announceResult() {
    this.#aggregateRank();
    const rateOfReturn = this.#calculateRateOfReturn();

    MissionUtils.Console.print(
      ANNOUNCEMENT.winningStatistics(this.winningDetails, rateOfReturn)
    );
  }

  async #receiveMoney() {
    const inputMoney = await MissionUtils.Console.readLineAsync(
      USER_INPUT.purchaseAmount
    );

    try {
      this.#validateReceivedMoney(inputMoney);
      this.#purchaseAmount = +inputMoney;
    } catch (error) {
      MissionUtils.Console.print(error.message);
      await this.#receiveMoney();
    }
  }

  #validateReceivedMoney(money) {
    const onlyNumber = '^[0-9]+$';
    const checkNumberRegExp = new RegExp(onlyNumber);

    if (money % 1000) {
      throw new Error(ERROR.purchaseAmount.indivisibleBy1000);
    } else if (money < 0) {
      throw new Error(ERROR.purchaseAmount.negative);
    } else if (!checkNumberRegExp.test(money)) {
      throw new Error(ERROR.purchaseAmount.notANumber);
    }
  }

  #printSalesQuantity(quantity) {
    MissionUtils.Console.print(ANNOUNCEMENT.purchase(quantity));
  }

  #generateNumbers() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);

    this.#sortAscendingOrder(numbers);
    this.lottos.push(new Lotto(numbers));
  }

  #sortAscendingOrder(numbers) {
    numbers.sort((a, b) => a - b);
  }

  #printNumbers() {
    this.lottos.forEach((lotto) => {
      MissionUtils.Console.print(lotto.getNumbers());
    });
  }

  async #setWinningNumbers() {
    const inputNumbers = await MissionUtils.Console.readLineAsync(
      USER_INPUT.winningNumbers
    );
    const inputNumbersArray = inputNumbers.split(',').map((num) => +num);

    try {
      this.#validateNumbersArray(inputNumbersArray);
      inputNumbersArray.forEach((num) => {
        this.#validateNumber(num);
      });
      this.#winningNumbers = inputNumbersArray;
    } catch (error) {
      MissionUtils.Console.print(error.message);
      await this.#setWinningNumbers();
    }
  }

  #validateNumbersArray(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.array.quantityMismatch);
    } else if (numbers.length !== new Set(numbers).size) {
      throw new Error(ERROR.array.duplicate);
    }
  }

  #validateNumber(number) {
    const range1to45 = /^(?:[1-9]|[1-3][0-9]|4[0-5])$/;
    const checkRangeRegExp = new RegExp(range1to45);
    if (!checkRangeRegExp.test(number)) {
      throw new Error(ERROR.number.range);
    }
  }

  async #setBonusNumber() {
    const inputNumber = await MissionUtils.Console.readLineAsync(
      USER_INPUT.bonusNumber
    );

    try {
      this.#validateDuplicate(this.#winningNumbers, +inputNumber);
      this.#validateNumber(inputNumber);
      this.#bonusNumber = +inputNumber;
    } catch (error) {
      MissionUtils.Console.print(error.message);
      await this.#setBonusNumber();
    }
  }

  #validateDuplicate(array, number) {
    if (array.includes(number)) {
      throw new Error(ERROR.number.duplicateBonus);
    }
  }

  #aggregateRank() {
    this.lottos.forEach((lotto) => {
      const ranking = lotto.checkResult(
        this.#winningNumbers,
        this.#bonusNumber
      );

      switch (ranking) {
        case RANKING.first:
          this.winningDetails.first++;
          break;
        case RANKING.second:
          this.winningDetails.second++;
          break;
        case RANKING.third:
          this.winningDetails.third++;
          break;
        case RANKING.fourth:
          this.winningDetails.fourth++;
          break;
        case RANKING.fifth:
          this.winningDetails.fifth++;
          break;
        default:
          break;
      }
    });
  }

  #calculateRateOfReturn() {
    const prize =
      PRIZE.first * this.winningDetails.first +
      PRIZE.second * this.winningDetails.second +
      PRIZE.third * this.winningDetails.third +
      PRIZE.fourth * this.winningDetails.fourth +
      PRIZE.fifth * this.winningDetails.fifth;

    const rateOfReturn = (prize / this.#purchaseAmount).toFixed(1);

    return rateOfReturn;
  }
}
