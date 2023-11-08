import Lotto from "./Lotto.js";
import { input } from "./util/input.js";
import { print } from "./util/output.js";
import { PRINT_MESSAGE, RESULT } from "./constants/message.js";

import { Random } from "@woowacourse/mission-utils";
import {
  validateBonusNumber,
  validateNumber,
  validateNumbers,
} from "./validation/number.js";
import { validateMoney } from "./validation/money.js";
import { PRIZE } from "./constants/prize.js";
import { ERROR_MESSAGE } from "./constants/error.js";
import { getInputValue } from "./validation/tryInput.js";
import { SEPERATE } from "./constants/seperate.js";
class App {
  lottos = [];

  getLottoCount(money) {
    return money / 1000;
  }

  async printBuyCount(count) {
    await print(`${count}${PRINT_MESSAGE.BUY_COUNT}`);
  }

  async createLottos(count) {
    for (let i = 0; i < count; i++) {
      this.insertLotto();
    }
  }

  async insertLotto() {
    const RANDOMS = await Random.pickUniqueNumbersInRange(1, 45, 6);
    const lotto = new Lotto(RANDOMS);
    this.lottos.push(lotto);
    return lotto;
  }

  makeNumberArray(numberString) {
    return numberString.split(SEPERATE.NUMBERS).map(Number);
  }

  async getNumbers() {
    const inputNumbers = await getInputValue(
      PRINT_MESSAGE.NUMBERS,
      validateNumbers
    );
    return inputNumbers.split(SEPERATE.NUMBERS).map(Number);
  }

  getPrizeCounts(numbers, bonusNumber) {
    let prizeCounts = {
      3: 0,
      4: 0,
      5: 0,
      bonus: 0,
      6: 0,
    };

    this.lottos.forEach((lotto) => {
      const { count, isbonus } = lotto.getPrizeCount(numbers, bonusNumber);
      if (isbonus) prizeCounts["bonus"]++;
      else prizeCounts[count]++;
    });

    return prizeCounts;
  }

  getRate(prizeCounts, money) {
    let prize = 0;

    prize += prizeCounts[3] * PRIZE[3];
    prize += prizeCounts[4] * PRIZE[4];
    prize += prizeCounts[5] * PRIZE[5];
    prize += prizeCounts["bonus"] * PRIZE["bonus"];
    prize += prizeCounts[6] * PRIZE[6];

    const rate = ((prize / money) * 100).toFixed(1);
    return rate;
  }

  getResult(numbers, bonusNumber, money) {
    const prizeCounts = this.getPrizeCounts(numbers, bonusNumber);
    const rate = this.getRate(prizeCounts, money);
    return { prizeCounts, rate };
  }

  async printResult(result) {
    print(RESULT.TITLE);
    print(RESULT.LINE);
    print(`${RESULT.PRIZE_3} - ${result.prizeCounts["3"]}개`);
    print(`${RESULT.PRIZE_4} - ${result.prizeCounts["4"]}개`);
    print(`${RESULT.PRIZE_5} - ${result.prizeCounts["5"]}개`);
    print(
      `${RESULT.PRIZE_BONUS} - ${result.prizeCounts["bonus"]}개`
    );
    print(`${RESULT.PRIZE_6} - ${result.prizeCounts["6"]}개`);
    print(`${RESULT.RATE} ${result.rate}%입니다.`);
  }

  async getPrizeNumbers() {
    const inputNumbers = await input(PRINT_MESSAGE.NUMBERS);
    validateNumbers(inputNumbers);
  }

  async getBonusNumber(prizeNumbers) {
    const bonusNumber = await getInputValue(
      PRINT_MESSAGE.BONUS_NUMBER,
      (bonusNumber) => {
        validateBonusNumber(bonusNumber, prizeNumbers);
      }
    );
    return +bonusNumber;
  }

  async setLottos(money) {
    const lottoCount = this.getLottoCount(+money);

    await this.printBuyCount(lottoCount);

    await this.createLottos(lottoCount);
    print("");
  }

  async getInputMoney() {
    const inputMoney = await getInputValue(
      PRINT_MESSAGE.INPUT_MONEY,
      validateMoney
    );

    return +inputMoney;
  }

  async play() {
    const inputMoney = await this.getInputMoney();

    await this.setLottos(inputMoney);

    const numbers = await this.getNumbers();

    const bonusNumber = await this.getBonusNumber(numbers);

    const result = this.getResult(numbers, bonusNumber, inputMoney);
    this.printResult(result);
  }
}

export default App;
