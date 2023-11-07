import { Console } from "@woowacourse/mission-utils";
import inputs from "./domains/inputs.js";
import outputs from "./domains/outputs.js";
import validationUtils from "./utils/validationUtils.js";
import publishService from "./services/publishService.js";
import purchaseService from "./services/purchaseService.js";
import winningService from "./services/winningService.js";
import statsService from "./services/statsService.js";

class App {
  #price;
  #amount;
  #lottos;
  #winningLotto;
  #bonusNum;
  #counts;
  #stats;
  #rate;

  async play() {
    await this.#executePurchaseLotto();
    this.#executePublishLotto();
    await this.#executeWinningNum();
    await this.#executeBonusNum();
    this.#executeWinningLotto();
    this.#executeStats();
  }

  // 로또 구입
  async #executePurchaseLotto() {
    try {
      this.#price = await purchaseService();
    } catch (error) {
      Console.print(error.message);
      return this.#executePurchaseLotto();
    }
  }

  // 로또 발행
  #executePublishLotto() {
    this.#amount = publishService.calculateAmount(this.#price);
    outputs.printAmountOfLotto(this.#amount);
    const LottoNums = publishService.publishLottos(this.#amount);
    this.#lottos = publishService.createLottos(LottoNums);
    outputs.printLottos(this.#lottos);
  }

  // 당첨 번호 입력
  async #executeWinningNum() {
    try {
      const winningNum = await inputs.inputWinningNum();
      this.#winningLotto = validationUtils.inputWinningNumValidate(winningNum);
    } catch (error) {
      Console.print(error.message);
      return this.#executeWinningNum();
    }
  }

  // 보너스 번호 입력
  async #executeBonusNum() {
    try {
      const bonusNum = await inputs.inpustBonusNum();
      const winningNums = this.#winningLotto.getLottoNum();
      this.#bonusNum = validationUtils.inputBonusNumValidate(
        bonusNum,
        winningNums
      );
    } catch (error) {
      Console.print(error.message);
      return this.#executeBonusNum();
    }
  }

  // 로또 당첨
  #executeWinningLotto() {
    this.#counts = this.#lottos.map((lotto) => {
      const count = winningService.getMatchedCount(lotto, this.#winningLotto);
      const bonus = winningService.getBonusCount(lotto, this.#bonusNum);
      return count + bonus;
    });
  }

  // 당첨 통계
  #executeStats() {
    const stats = this.#counts.map((count) => {
      const reCount = statsService.getSecondRank(count);
      const stats = statsService.getRank(reCount);
      return stats;
    });
    this.#stats = stats.at(-1);

    // 통계 출력
    outputs.printStats(this.#stats);

    // 수익률 출력
    const total = statsService.getTotal(this.#stats);
    this.#rate = statsService.getRate(this.#price, total);
    outputs.printRate(this.#rate);
  }
}

export default App;
