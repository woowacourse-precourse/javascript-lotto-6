import Lotto from "./Lotto.js";
import { input } from "./util/input.js";
import { print } from "./util/output.js";
import { PRINT_MESSAGE } from "./constants/message.js";

import { Random } from "@woowacourse/mission-utils";
import {
  getValidatedNumber,
  getValidatedNumbers,
} from "./validation/number.js";
import { validateMoney } from "./validation/money.js";
class App {
  lottos = [];

  getLottoCount(money) {
    validateMoney(money);
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
    const numbers = numberString.split(",");
    return getValidatedNumbers(numbers);
  }

  getResult(NUMBERS, BONUS_NUMBER) {
    let prizeCount = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      bonus: 0,
      6: 0,
    };
    this.lottos.forEach((lotto) => {
      const { count, isbonus } = lotto.getPrizeCount(NUMBERS, BONUS_NUMBER);
      if (isbonus) prizeCount["bonus"]++;
      else prizeCount[count]++;
    });

    return prizeCount;
  }

  async printResult(result) {}

  async play() {
    //돈 입력 및 로또 개수 구하기
    const INPUT_MONEY = await input(PRINT_MESSAGE.INPUT_MONEY);
    const LOTTO_COUNT = this.getLottoCount(+INPUT_MONEY);

    await this.printBuyCount(LOTTO_COUNT);
    print("");

    //로또 생성
    await this.createLottos(LOTTO_COUNT);

    //각 로또 번호 생성
    const INPUT_NUMBERS = await input(PRINT_MESSAGE.NUMBERS);
    const NUMBERS = this.makeNumberArray(INPUT_NUMBERS);

    //보너스 번호 생성
    const INPUT_BONUS_NUMBERS = await input(PRINT_MESSAGE.BONUS_NUMBER);
    const BONUS_NUMBERS = getValidatedNumber(INPUT_BONUS_NUMBERS);

    const RESULT = this.getResult(NUMBERS, BONUS_NUMBERS);
    console.log(RESULT);
    
  }
}

export default App;
