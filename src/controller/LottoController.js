import { Console } from '@woowacourse/mission-utils';
import Lottos from '../model/Lottos.js';
import WinningLotto from '../model/WinningLotto.js';

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
    const money = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    const getLottoCount = this.calculateLottoCount(money);
    this.#lottos = new Lottos(getLottoCount);
    this.showLottos();
  }

  calculateLottoCount(money) {
    const price = Number(money);

    return Math.floor(price / 1000);
  }

  showLottos() {
    Console.print('\n');
    const lottos = this.#lottos.getLottos();
    this.printLottosCount(lottos.length);
    this.printLottoNumbers(lottos);
  }

  printLottosCount(lottoCount) {
    Console.print(`${lottoCount}개를 구매했습니다.`);
  }

  printLottoNumbers(lottos) {
    lottos.map(lotto => {
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });
  }

  async inputWinningLottoNumbers() {
    const winningLottoNumbers =
      await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    Console.print('');

    this.#winningLottos = winningLottoNumbers.split(',').map(Number);
  }

  async inputBonusLottoNumber() {
    const winningBonusNumber =
      await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
    Console.print('');

    this.#winningLottos = new WinningLotto(
      this.#winningLottos,
      Number(winningBonusNumber),
    );
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

    Console.print(`총 수익률은 ${lottoROI}%입니다.`);
  }
}

export default LottoController;
