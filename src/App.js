import { Random, Console } from '@woowacourse/mission-utils';
import MESSAGE from './constant/message.js';
import Lotto from './Lotto.js';
import inputView from './View/inputView.js';

class App {
  async play() {
    const purchasePrice = await inputView.readPurchasePriceAsync(MESSAGE.INPUT_PRICE);
    const lottoCount = purchasePrice / 1000;
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
    const myLottoNumbers = this.purchaseLottos(lottoCount);
    const winningNumbers = await inputView.readWinningNumbersAsync(MESSAGE.INPUT_WINNING_NUMBER);
    const lotto = new Lotto(winningNumbers);
    const bonusNumber = await inputView.readBonusNumberAsync(MESSAGE.INPUT_BONUS_NUMBER);
    lotto.validateBonusNumber(bonusNumber);
    lotto.getLottoResult(myLottoNumbers, bonusNumber, purchasePrice);
  }

  purchaseLottos(lottoCount) {
    const myLottoNumbers = [];
    for (let i = 0; i < lottoCount; i++) {
      const randomNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
      randomNumber.sort((a, b) => a - b);
      myLottoNumbers.push(randomNumber);
      Console.print(`[${randomNumber.join(', ')}]`);
    }
    return myLottoNumbers;
  }
}

export default App;
