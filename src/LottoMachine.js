import { MissionUtils } from '@woowacourse/mission-utils';
import { USER_INPUT, ANNOUNCEMENT, ERROR } from './message.js';
import { LOTTO_PRICE } from './constant.js';
import Lotto from './Lotto.js';

export default class LottoMachine {
  #purchaseAmount;
  #winningNumbers;
  #bonusNumber;

  constructor() {
    this.lottos = [];
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

  async #receiveMoney() {
    const inputMoney = await MissionUtils.Console.readLineAsync(
      USER_INPUT.purchaseAmount
    );

    this.#validateReceivedMoney(inputMoney);
    this.#purchaseAmount = +inputMoney;
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

    this.#validateNumbersArray(inputNumbersArray);
    inputNumbersArray.forEach((num) => {
      this.#validateNumber(num);
    });

    this.#winningNumbers = inputNumbersArray;
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

    if (this.#winningNumbers.includes(+inputNumber)) {
      throw new Error(ERROR.number.duplicateBonus);
    }
    this.#validateNumber(inputNumber);
    this.#bonusNumber = +inputNumber;
  }
}
