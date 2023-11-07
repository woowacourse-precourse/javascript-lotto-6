import Lotto from "./Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  #lottos = [];

  // TODO: 로또 구매 및 당첨 결과 출력
  async play() {
    try {
      const purchaseAmount = await this.#askPurchaseAmount();
      this.#lottos = this.#purchaseLottos(purchaseAmount);
      this.#printLottos(this.#lottos);

      const winningNumbers = await this.#askWinningNumbers();
      const bonusNumber = await this.#askBonusNumber();
      const results = this.#checkResults(winningNumbers, bonusNumber);
      const profitRate = this.#calculateProfitRate(purchaseAmount, results);

      this.#printResults(results);
      this.#printProfitRate(profitRate);
    } catch (error) {
      console.error("[ERROR]", error); // 두 번째 인수로 에러 객체를 전달
    }
  }

}
export default App;