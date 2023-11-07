import { Console, Random } from '@woowacourse/mission-utils';
import MESSAGE from './constant/message.js';
import Lotto from './Lotto.js';
import inputView from './View/inputView.js';
import outputView from './View/outputView.js';

class App {
  async play() {
    const purchasePrice = await inputView.readPurchasePriceAsync(MESSAGE.INPUT_PRICE);
    const lottoCount = purchasePrice / 1000;
    outputView.printLottoCount(lottoCount);
    const myLottoNumbers = this.purchaseLottos(lottoCount);
    const lotto = await this.getWinningNumber();
    const bonusNumber = await this.getBonusNumber(lotto);
    lotto.getLottoResult(myLottoNumbers, bonusNumber, purchasePrice);
  }

  async getWinningNumber() {
    try {
      const winningNumbers = await inputView.readWinningNumbersAsync(MESSAGE.INPUT_WINNING_NUMBER);
      const lotto = new Lotto(winningNumbers);
      return lotto;
    } catch (e) {
      Console.print(e.message);
      return await this.getWinningNumber();
    }
  }

  async getBonusNumber(lotto) {
    try {
      const bonusNumber = await inputView.readBonusNumberAsync(MESSAGE.INPUT_BONUS_NUMBER);
      lotto.validateBonusNumber(bonusNumber);
      return bonusNumber;
    } catch (e) {
      Console.print(e.message);
      return await this.getBonusNumber(lotto);
    }
  }

  purchaseLottos(lottoCount) {
    const myLottoNumbers = [];
    for (let i = 0; i < lottoCount; i++) {
      const randomNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
      randomNumber.sort((a, b) => a - b);
      myLottoNumbers.push(randomNumber);
      outputView.printLottoNumbers(randomNumber);
    }
    return myLottoNumbers;
  }
}

export default App;
