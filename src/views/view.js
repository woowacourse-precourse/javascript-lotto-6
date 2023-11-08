import { CONSOLE_MESSAGE } from '../utils/Define.js';
import inputView from './InputReader.js';
import outputView from './OutputView.js';

class View {
  async getPurchaseAmount() {
    const purchaseAmount = await inputView(CONSOLE_MESSAGE.requestBuying);
    return purchaseAmount;
  }

  async returnPurchaseLottos(lottos, quantity) {
    await outputView(CONSOLE_MESSAGE.returnBuying(quantity));
    await Promise.all(lottos.map(lotto => outputView(`[${lotto.getNumbers().join(', ')}]`)));
  }





  async getWinnigNumbers() {
    const winningNumbers = await inputView(CONSOLE_MESSAGE.requestLottoNumbers);
    return winningNumbers;
  }

  async getBonusNumber() {
    const bonusNumber = await inputView(CONSOLE_MESSAGE.requestBonusNumber);
    return bonusNumber;
  }

  async returnResult(lottoResult) {
    await outputView(CONSOLE_MESSAGE.returnWinning);
    await outputView(CONSOLE_MESSAGE.returnFifthResult(lottoResult[0]));
    await outputView(CONSOLE_MESSAGE.returnFourthResult(lottoResult[1]));
    await outputView(CONSOLE_MESSAGE.returnThirdResult(lottoResult[2]));
    await outputView(CONSOLE_MESSAGE.returnSecondResult(lottoResult[3]));
    await outputView(CONSOLE_MESSAGE.returnFirstResult(lottoResult[4]));
  }





  async returnLottoROI(lottoROI) {
    await outputView(CONSOLE_MESSAGE.returnLottoROI(lottoROI));
  }
}

export default View;
