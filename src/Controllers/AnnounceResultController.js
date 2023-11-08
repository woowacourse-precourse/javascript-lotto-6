import LottoYieldCalculator from "../service/LottoYieldCalculator.js";
import { OutputView } from "../Views/index.js";

export default class AnnounceResult {
  static announceTotalResult(lottos, drawnLotto, purchaseAmount) {
    const result = this.#calcalateResult(lottos, drawnLotto);
    const yieldRate = this.#calculateYieldRate(result, purchaseAmount);
    OutputView.printResultMessage(result, yieldRate);
  }

  static #calcalateResult(lottos, drawnLotto) {
    const lottoYieldCalculator = new LottoYieldCalculator();
    const result = lottoYieldCalculator.getResult(lottos, drawnLotto);
    return result;
  }

  static #calculateYieldRate(result, purchaseAmount) {
    const lottoYieldCalculator = new LottoYieldCalculator();
    const yieldRate = lottoYieldCalculator.calculateYieldRate(
      result,
      purchaseAmount.getAmount()
    );
    return yieldRate;
  }
}
