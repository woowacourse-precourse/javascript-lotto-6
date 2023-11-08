import { LOTTO_RULE, MESSAGES } from "../../constants";
import { Calculator, LottoSeller } from "../../domain";
import { OutputView } from "../../view";

export class LottoService {
  #lottos;
  #lottoWinningResults = [];
  #totalReturn = 0;
  #lottoSeller = new LottoSeller(LOTTO_RULE.PRICE);
  #Calculator = new Calculator();

  async buyLottos() {
    this.#lottos = await this.#lottoSeller.sellLotto();
  }

  async drawLotto() {
    await this.#Calculator.promptWinningNumber();
    await this.#Calculator.promptBonusNumber();
    const { lottoWinningsResult, totalReturn } =
      this.#Calculator.getWinningsResult(this.#lottos);

    this.#lottoWinningResults = lottoWinningsResult;
    this.#totalReturn = totalReturn;
  }

  printResult() {
    OutputView.print(MESSAGES.WINNING_STATISTICS.PREFIX);
    this.#lottoWinningResults.forEach((lottoWinningResult, i) => {
      OutputView.print(MESSAGES.WINNING_STATISTICS[5 - i](lottoWinningResult));
    });
    OutputView.print(MESSAGES.WINNING_STATISTICS.SUFFIX(this.#totalReturn));
  }
}
