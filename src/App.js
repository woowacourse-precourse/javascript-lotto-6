import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import BuyLotto from './BuyLotto.js';
import { CONSTANT_VALUE } from './constants.js';

class App {
  async generateWinningNumbers() {
    const winningNumbers = await MissionUtils.Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
    const winningNumbersArray = winningNumbers.split(',').map(Number);

    return winningNumbersArray;
  }

  async generateBonusNumber() {
    const bonusNumber = await MissionUtils.Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');

    return Number(bonusNumber);
  }

  async play() {
    const buyLotto = new BuyLotto(
      CONSTANT_VALUE.lottoPrice,
      CONSTANT_VALUE.dailyLimitPrice,
      CONSTANT_VALUE.numberCheck,
    );

    const lottoNumbers = await buyLotto.start();

    const winningNumbers = await this.generateWinningNumbers();
    const bonusNumber = await this.generateBonusNumber();
    const lotto = new Lotto(winningNumbers);

    lotto.validateBonus(bonusNumber);
    lotto.printEarnings(lottoNumbers, winningNumbers, bonusNumber);
  }
}

export default App;
