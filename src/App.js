import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import BuyLotto from './BuyLotto.js';

const LOTTO_PRICE = 1000;
const DAILY_LIMIT_PRICE = 100000;
const NUMBER_CHECK = /^[0-9]+$/;

class App {
  async generateWinningNumbers() {
    const winningNumbers = await MissionUtils.Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');

    const winningNumbersArray = winningNumbers.split(',').map(Number);
    return winningNumbersArray;
  }

  async generateBonusNumber() {
    const bonusNumber = await MissionUtils.Console.readLineAsync('보너스 번호를 입력해 주세요.\n');

    return Number(bonusNumber);
  }

  async play() {
    const buyLotto = new BuyLotto(LOTTO_PRICE, DAILY_LIMIT_PRICE, NUMBER_CHECK);
    const purchaseAmount = await buyLotto.inputPurchaseAmount();
    buyLotto.validateInputPurchaseAmount(purchaseAmount);
    buyLotto.getLottoNumbers(purchaseAmount);

    const winningNumbers = await this.generateWinningNumbers();
    const bonusNumber = await this.generateBonusNumber();
  }
}

export default App;
