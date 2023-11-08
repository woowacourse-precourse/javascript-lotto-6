import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import Counter from "./Counter.js";
import Statistics from "./Statistics.js";
import { lottoMaker } from "./LottoMaker.js";
import Input from "./Input.js";
class App {
  async play() {
    const { money, count } = await this.#getMoney();
    const lottos = await this.#pickLottery(count);
    const { myLotto, bonusNumber } = await this.#getWinningNumbers();
    const counter = this.#getCounter(lottos, myLotto, bonusNumber);
    const statistics = new Statistics(counter);
    statistics.print(money);
  }

  async #getMoney() {
    const money = await Input.inputMoney();
    return { money, count: money / 1000 };
  }

  async #getWinningNumbers() {
    const numbers = await Input.inputWinningNumber();
    const bonusNumber = await Input.inputBonusNumber();
    const myLotto = new Lotto(numbers);
    return { myLotto, bonusNumber };
  }

  async #pickLottery(count) {
    const lottos = lottoMaker(count);
    Console.print(`${count}개를 구매했습니다.`);
    lottos.forEach((lotto) => lotto.print());
    return lottos;
  }

  #getCounter(lottos, myLotto, bonusNumber) {
    const counter = new Counter();
    lottos.forEach((lotto) => {
      const { matchCount, isBonusNumber } = lotto.checkWinningNumber(
        myLotto,
        bonusNumber
      );
      counter.countUp(matchCount, isBonusNumber);
    });
    return counter;
  }
}

export default App;
