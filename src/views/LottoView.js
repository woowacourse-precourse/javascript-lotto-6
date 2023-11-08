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
    return result.split(OPTION.inputSeparator).map(Number);
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
    this.print(`${lottoCount}${MESSAGE.print.lottoCount}`);
  }

  printLottos(lottos) {
    lottos.forEach((lotto) => {
      this.print(`[${lotto.join(', ')}]`);
    });
  }

  printLottoResult(lottoResult) {
    const messages = [
      MESSAGE.print.lottoResultHeader,
      `${MESSAGE.print.fifthPrizeCount} ${lottoResult.fifthPrizeCount}개`,
      `${MESSAGE.print.fourthPrizeCount} ${lottoResult.fourthPrizeCount}개`,
      `${MESSAGE.print.thirdPrizeCount} ${lottoResult.thirdPrizeCount}개`,
      `${MESSAGE.print.secondPrizeCount} ${lottoResult.secondPrizeCount}개`,
      `${MESSAGE.print.firstPrizeCount} ${lottoResult.firstPrizeCount}개`,
    ];

    messages.forEach((message) => this.print(message));
  }

  printLottoTotalReturns(lottoTotalReturns) {
    this.print(
      `${MESSAGE.print.lottoTotalReturns[0]} ${lottoTotalReturns}${MESSAGE.print.lottoTotalReturns[1]}`,
    );
  }
}

export default LottoView;
