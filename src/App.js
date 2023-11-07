import { bonusNumberHandler, lottoCalculatorHandler, lottoGeneratorHandler } from "./Utils/handlers";
import OutputView from "./View/OutputView";

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
      OutputView.printError({ message: err.message });
    }
  }

  printLotto() {
    try {
      OutputView.printPurchasedList({
        purchasedList: this.#lottoGenerator.purchasedList,
      });
    } catch (err) {
      OutputView.printError({ message: err.message });
    }
  }

  printResult() {
    try {
      const { prizeResultMap, earningRate } = this.#result;
      OutputView.printResult({ prizeResultMap, earningRate });
    } catch (err) {
      OutputView.printError({ message: err.message });
    }
  }
}

export default App;
