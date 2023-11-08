import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import Counter from "./Counter.js";
import { lottoMaker } from "./LottoMaker.js";
import Input from "./Input.js";
class App {
  async play() {}

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
}

export default App;
