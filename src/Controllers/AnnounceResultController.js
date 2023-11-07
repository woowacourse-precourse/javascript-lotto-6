import LottoYieldCalculator from "../service/LottoYieldCalculator.js";
import { OutputView } from "../Views/index.js";

export default class AnnounceResult {
  static announceTotalResult(lottos, drawnLotto, purchaseAmount) {
    const result = this.#announcePrizeResult(lottos, drawnLotto);
    this.#announceYieldRate(result, purchaseAmount);
  }

  static #announcePrizeResult(lottos, drawnLotto) {
    const lottoYieldCalculator = new LottoYieldCalculator();
    const { drawnLottoNumbers, bonusNumber } = drawnLotto.getFullNumbers();

    const result = lottoYieldCalculator.getResult(
      lottos,
      drawnLottoNumbers,
      bonusNumber
    );
    OutputView.printResultMessage(result);
    return result;
  }

  static #announceYieldRate(result, purchaseAmount) {
    const lottoYieldCalculator = new LottoYieldCalculator();
    const yieldRate = lottoYieldCalculator.caculateYieldRate(
      result,
      purchaseAmount.getAmount()
    );

    OutputView.printYieldRate(yieldRate);
  }
}
