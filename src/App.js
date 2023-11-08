import { Random, Console } from "@woowacourse/mission-utils";
import { BUY_AMOUNT_MESSAGE, WIN_NUMBERS_MESSAGE, BONUS_NUMBER_MESSAGE, WIN_PRINT, MIN_NUMBER, MAX_NUMBER, COUNT_NUMBER, WIN_INFO, PRIZE, ERRORS } from './constants.js';
import Lotto from "./Lotto.js";

class App {
  #lottoAmount = 0;
  #lottoNumbers = [];
  #winNumber = [];
  #bonusNumber = 0;
  #winResult = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

  async buyLotto() {
    try {
      const money = await Console.readLineAsync(BUY_AMOUNT_MESSAGE);
      if (money % 1000 !== 0 || money < 1000) throw new Error(ERRORS.InvalidAmount);
      if (Number.isNaN(money)) throw new Error(ERRORS.InvalidNAN);
      if (money === null || money === 0) throw new Error(ERRORS.InvalidBlank);
      return money;
    } catch (e) {
      Console.print(e.message);
      return this.buyLotto();
    }
  }

  printLotto(money) {
    this.#lottoAmount = money / 1000;
    Console.print(`\n ${this.#lottoAmount}개를 구매했습니다.\n`);
    for (let i = 0; i < this.#lottoAmount; i++) {
      const lottoNumberArr = Random.pickUniqueNumbersInRange(MIN_NUMBER, MAX_NUMBER, COUNT_NUMBER).sort((a, b) => a - b);
      const lottoNum = `[${lottoNumberArr.join(", ")}]`;
      Console.print(lottoNum);
      this.#lottoNumbers.push(lottoNumberArr);
    }
  }

  async inputWinLotto() {
    try {
      const input = await Console.readLineAsync(WIN_NUMBERS_MESSAGE);
      this.#winNumber = input.split(',');
      const lotto = new Lotto(this.#winNumber);
      return this.#winNumber;
    } catch (e) {
      Console.print(e.message);
      return this.inputWinLotto();
    }
  }

  async inputBonusNum() {
    try {
      const input = await Console.readLineAsync(BONUS_NUMBER_MESSAGE);
      if (this.#winNumber.includes(input)) throw new Error(ERRORS.InvalidDuplicateNumber);
      if (input < 1 || input > 45) throw new Error(ERRORS.InvalidRange);
      this.#bonusNumber = input;
    } catch (e) {
      Console.print(e.message);
      return this.inputBonusNum();
    }
  }

  async play() {}
}

export default App;
