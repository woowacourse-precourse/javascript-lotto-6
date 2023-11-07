import { bonusNumberHandler, lottoCalculatorHandler, lottoGeneratorHandler } from "./handlers";
import OutputView from "./OutputView";

class App {
  #lottoGenerator;
  #result;

  async play() {
    try {
      this.#lottoGenerator = await lottoGeneratorHandler();
      this.printLotto();
      const LottoCalculator = await lottoCalculatorHandler();
      await bonusNumberHandler(LottoCalculator);
      this.#result = LottoCalculator.calculateResult(this.#lottoGenerator.lottos);
      this.printResult();
    } catch (err) {
      if (err) throw err;
      OutputView.err({ message: err.message });
    }
  }

  printLotto() {
    try {
      OutputView.lottoGenerator({
        purchasedList: this.#lottoGenerator.purchasedList,
      });
    } catch (err) {
      OutputView.err({ message: err.message });
    }
  }

  printResult() {
    try {
      const { prizeResultMap, earningRate } = this.#result;
      OutputView.result({ prizeResultMap, earningRate });
    } catch (err) {
      OutputView.err({ message: err.message });
    }
  }
}

export default App;
