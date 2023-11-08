import MESSAGE from '../constants/message.js';
import OPTION from '../constants/option.js';
import inputView from './inputView.js';
import outputView from './outputView.js';

class LottoView {
  #inputView;

  #outputView;

  constructor() {
    this.#inputView = inputView;
    this.#outputView = outputView;
  }

  async readPurchaseAmount() {
    const result = await this.#inputView.read(MESSAGE.read.purchaseAmount);
    return Number(result);
  }

  async readWinningNumbers() {
    const result = await this.#inputView.read(MESSAGE.read.winningNumbers);
    return result.split(OPTION.read.inputSeparator).map(Number);
  }

  async readBonusNumber() {
    const result = await this.#inputView.read(MESSAGE.read.bonusNumber);
    return Number(result);
  }

  print(query) {
    this.#outputView.print(query);
  }

  printNewLine() {
    this.print('');
  }

  printLottoCount(lottoCount) {
    this.print(MESSAGE.print.lottoCount(lottoCount));
  }

  printLottos(lottos) {
    lottos.forEach((lotto) => {
      this.print(`[${lotto.join(', ')}]`);
    });
  }

  printLottoResult(lottoResult) {
    this.print(MESSAGE.print.lottoResultHeader);
    this.print(MESSAGE.print.fifthPrizeResult(lottoResult.fifthPrizeCount));
    this.print(MESSAGE.print.fourthPrizeResult(lottoResult.fourthPrizeCount));
    this.print(MESSAGE.print.thirdPrizeResult(lottoResult.thirdPrizeCount));
    this.print(MESSAGE.print.secondPrizeResult(lottoResult.secondPrizeCount));
    this.print(MESSAGE.print.firstPrizeResult(lottoResult.firstPrizeCount));
  }

  printLottoTotalReturns(lottoTotalReturns) {
    this.print(MESSAGE.print.lottoTotalReturns(lottoTotalReturns));
  }
}

export default LottoView;
