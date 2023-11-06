import Handler from "./lib/Handler/index.js";
import OutputView from "./lib/View/OutputView.js";
import { ERROR_MESSAGE } from "./lib/Constants.js";

class App {
  // referenceLotto를 저장하면 결과는 계산될 수 있음에도 result를 보관하는 이유가 존재
  // result를 저장하지 않으면 외부에서 요청이 들어왔을 때 계산을 다시 실시해야 함
  // 이 경우 view로직과 domain로직을 한번에 수행해야 하는 컨트롤러를 별도로 만들어야 하므로 복잡해짐
  // lottoBundle에 결과를 넣고 출력할 수 있지만 이는 LottoBundle의 본질적 속성이 아님
  #lottoBundle;
  #result;

  async play() {
    try {
      this.#lottoBundle = await Handler.lottoBundle();
      this.printLottoBundle();
      const lotto = await Handler.winningLotto();
      const referenceLotto = await Handler.referenceLotto(lotto);

      this.#result = referenceLotto.calcResult(this.#lottoBundle.items);
      this.printResult();
    } catch (err) {
      OutputView.err({ message: err.message });
    }
  }

  printLottoBundle() {
    try {
      if (!this.#lottoBundle) {
        throw new Error(ERROR_MESSAGE.INSTANCE_NOT_INITIALIZED);
      }
      OutputView.lottoBundle({
        purchaseHistory: this.#lottoBundle.purchaseHistory,
      });
    } catch (err) {
      OutputView.err({ message: err.message });
    }
  }

  printResult() {
    try {
      if (!this.#result) {
        throw new Error(ERROR_MESSAGE.INSTANCE_NOT_INITIALIZED);
      }
      const { prizeMap, winRate } = this.#result;
      OutputView.result({ prizeMap, winRate });
    } catch (err) {
      OutputView.err({ message: err.message });
    }
  }
}

export default App;
