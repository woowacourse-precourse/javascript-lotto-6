import { Console } from '@woowacourse/mission-utils';
import Lottos from '../model/Lottos.js';
import WinningLotto from '../model/WinningLotto.js';
import InputValidator from '../utils/InputValidator.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class LottoController {
  #lottos;
  #winningLottos;

  async playLotto() {
    await this.inputMoney();
    await this.inputWinningLottoNumbers();
    await this.inputBonusLottoNumber();
    this.calculateMatchingNumbers();
    this.displayLottoMatchResults();
    const totalPrize = this.calculatePrizeAmount(this.#lottos.getRankCount());
    this.displayLottoROI(totalPrize, this.#lottos.getLottos());
  }

  async inputMoney() {
    try {
      const money = await InputView.printPurchaseAmount();
      InputValidator.validatePurchaseMoney(money);
      const getLottoCount = this.calculateLottoCount(money);
      this.#lottos = new Lottos(getLottoCount);
      this.showLottos();
    } catch (error) {
      Console.print(error.message);
      await this.inputMoney();
    }
  }

  calculateLottoCount(money) {
    const price = Number(money);

    return Math.floor(price / 1000);
  }

  showLottos() {
    Console.print('');
    const lottos = this.#lottos.getLottos();
    this.printLottosCount(lottos.length);
    this.printLottoNumbers(lottos);
  }

  printLottosCount(lottoCount) {
    OutputView.printLottosCount(lottoCount);
  }

  printLottoNumbers(lottos) {
    lottos.map(lotto => {
      OutputView.printLottoNumbers(lotto);
    });
    Console.print('');
  }

  async inputWinningLottoNumbers() {
    try {
      const winningLottoNumbers = await InputView.printWinningLottoNumbers();
      Console.print('');
      this.#winningLottos = winningLottoNumbers.split(',').map(Number);
      InputValidator.validateNumbers(this.#winningLottos);
    } catch (error) {
      Console.print(error.message);
      await this.inputWinningLottoNumbers();
    }
  }

  async inputBonusLottoNumber() {
    try {
      const winningBonusNumber = await InputView.printWinningBonusNumber();
      InputValidator.validateNumber(winningBonusNumber);
      Console.print('');
      this.#winningLottos = new WinningLotto(
        this.#winningLottos,
        Number(winningBonusNumber),
      );
    } catch (error) {
      Console.print(error.message);
      await this.inputBonusLottoNumber();
    }
  }

  calculateMatchingNumbers() {
    this.#lottos.calculateRanks(
      this.#winningLottos.getWinningLottoNumbers(),
      this.#winningLottos.getBonusLottoNumber(),
    );
  }

  displayLottoMatchResults() {
    const rankCount = this.#lottos.getRankCount();

    Console.print(this.formatLottoResults(rankCount));
  }

  formatLottoResults(rankCount) {
    const rankOrder = ['3', '4', '5', '5+', '6'];
    const rankDescriptions = {
      3: '3개 일치 (5,000원)',
      4: '4개 일치 (50,000원)',
      5: '5개 일치 (1,500,000원)',
      '5+': '5개 일치, 보너스 볼 일치 (30,000,000원)',
      6: '6개 일치 (2,000,000,000원)',
    };

    return rankOrder
      .map(rank => `${rankDescriptions[rank]} - ${rankCount[rank] || 0}개`)
      .join('\n');
  }

  calculatePrizeAmount(rankCount) {
    const rankEarnings = {
      3: 5000,
      4: 50000,
      5: 1500000,
      '5+': 30000000,
      6: 2000000000,
    };
    const prizeAmount = Object.keys(rankCount).reduce(
      (sum, rank) => sum + rankEarnings[rank] * rankCount[rank],
      0,
    );
    return prizeAmount;
  }

  displayLottoROI(totalPrize, lottos) {
    const lottoPurchaseAmount = lottos.length * 1000;
    const lottoROI = ((totalPrize / lottoPurchaseAmount) * 100).toFixed(1);

    OutputView.printLottoROI(lottoROI);
  }
}

export default LottoController;
