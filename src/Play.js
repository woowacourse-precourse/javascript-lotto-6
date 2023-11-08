import Bonus from "./Bonus.js";
import Lotto from "./Lotto.js";
import MyLotto from "./MyLotto.js";
import { MESSAGE, NUMBER, PRICES, WIN_KIND } from "./contants.js";
import { Console } from "@woowacourse/mission-utils";

class Play {
  #money;
  #myLottos;
  #correctLotto;
  #bonus;
  #winInfo;

  async start() {
    await this.getUserInput();
    await this.getCorrectNumberInput();
    this.printResult();
  }

  async getUserInput() {
    this.#money = await Console.readLineAsync(MESSAGE.HOW_MANY_BUY_LOTTOS);
    const myLottos = new MyLotto(this.#money);
    myLottos.printLottos();
    this.#myLottos = myLottos.getMyLotts();
  }

  async getCorrectNumberInput() {
    const correctLottoInput = await Console.readLineAsync(
      MESSAGE.CORRET_LOTTO_NUMBER
    );
    const correctLottoInputArray = correctLottoInput.split(",");
    this.#correctLotto = new Lotto(correctLottoInputArray).getCorrectNumber();
    const bonusNumberInput = await Console.readLineAsync(MESSAGE.BONUS_NUMBER);
    this.#bonus = new Bonus(bonusNumberInput).getBonusNumber();
  }

  printResult() {
    Console.print(MESSAGE.START_RESULT);
    this.#winInfo = Array(NUMBER.WIN_KIND_NUM).fill(0);
    this.resolveLotto();
    Console.print(`${WIN_KIND.THREE}${this.#winInfo[0]}개`);
    Console.print(`${WIN_KIND.FOUR}${this.#winInfo[1]}개`);
    Console.print(`${WIN_KIND.FIVE}${this.#winInfo[2]}개`);
    Console.print(`${WIN_KIND.FIVE_BONUS}${this.#winInfo[3]}개`);
    Console.print(`${WIN_KIND.SIX}${this.#winInfo[4]}개`);
    const profitRatio = this.getProfitRatio();
    Console.print(`총 수익률은 ${profitRatio}%입니다.`);
  }

  resolveLotto() {
    for (const lotto of this.#myLottos) {
      switch (this.countCorrectNumber(lotto)) {
        case 6:
          this.#winInfo[4]++;
          break;
        case 5:
          this.isBonusBallCorrect(lotto)
            ? this.#winInfo[3]++
            : this.#winInfo[2]++;
          break;
        case 4:
          this.#winInfo[1]++;
          break;
        case 3:
          this.#winInfo[0]++;
          break;
      }
    }
  }

  countCorrectNumber(lotto) {
    const correctNumber = lotto.filter((e) =>
      this.#correctLotto.includes(String(e))
    );
    let correctCount = correctNumber.length;
    return correctCount;
  }

  isBonusBallCorrect(lotto) {
    for (const number of lotto) {
      if (number === parseInt(this.#bonus)) {
        return true;
      }
    }
    return false;
  }

  // this.profitRate = Number(((profit / price) * 100).toFixed(2));
  getProfitRatio() {
    let totalProfit = 0;
    for (const idx in this.#winInfo) {
      totalProfit += PRICES[idx] * this.#winInfo[idx];
    }

    return ((totalProfit / this.#money) * 100).toFixed(1);
  }
}

export default Play;
