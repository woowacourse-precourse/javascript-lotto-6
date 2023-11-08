import Lotto from '../model/Lotto.js';
import Money from '../model/Money.js';
import LottoLogic from '../model/LottoLogic.js';
import UserInput from '../model/UserInput.js';
import Output from '../view/Output.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import BonusLotto from '../model/BonusLotto.js';
import Statistics from '../model/Statistics.js';

class LottoController {
  async run() {
    const userInput = new UserInput();
    const output = new Output();

    let lotto;
    let bonusLotto;
    let money;

    // money 입력
    while (true) {
      try {
        const moneyInput = await userInput.setMoneyInput();
        money = new Money(Number(moneyInput));
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }

    // lotto 입력
    while (true) {
      try {
        const lottoStr = await userInput.setLottoInput();
        const lottoArr = lottoStr.split(',').map((num) => Number(num));
        lotto = new Lotto(lottoArr);
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }

    // bonus 입력
    while (true) {
      try {
        const bonusStr = await userInput.setBonusInput();
        const bonusNum = Number(bonusStr);
        bonusLotto = new BonusLotto(bonusNum, await lotto.getNumbers());
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }

    const result = await this.#getResult(lotto, bonusLotto, money, output);
    await this.#runStatistics(money, result, output);
  }

  async #runStatistics(money, result, output) {
    const statistics = new Statistics(money);
    const statisticsResult = await statistics.getRate(result);
    await output.printProfitRate(statisticsResult);
  }

  async #getResult(lotto, bonusLotto, money, output) {
    const lottoLogic = new LottoLogic(lotto, bonusLotto, money);
    const result = await lottoLogic.start();
    await output.printCount(await lottoLogic.getCount());
    await output.printGeneratedLottos(await lottoLogic.getGeneratedLottosArr());
    await output.printResult(result);

    return result;
  }
}

export default LottoController;
