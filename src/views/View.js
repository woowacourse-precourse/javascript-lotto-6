import OutputView from './OutputView.js';
import InputView from './InputView.js';
import { UNIT } from '../constants.js';
class View {
  #view;
  #input;
  #output;
  constructor() {
    this.#input = new InputView();
    this.#output = new OutputView();
  }
  async getLottoAmountCount() {
    const amount = await this.#input.multiInputAmount();
    const lottoCount = amount / UNIT;
    return { amount, lottoCount };
  }
  async getLottoInput() {
    const winningNumbers = await this.#input.multiInputWinningNumbers();
    const bonusNumber = await this.#input.multiInputBonusNumber(winningNumbers);
    return { winningNumbers, bonusNumber };
  }
  setLottos(lottos) {
    this.#output.lottos = lottos;
    this.#output.printLottos();
  }
  setResult(result, rateOfReturn) {
    this.#output.result = result;
    this.#output.rateOfReturn = rateOfReturn;
    this.#output.printResult();
    this.#output.printRateOfReturn();
  }
}
export default View;
