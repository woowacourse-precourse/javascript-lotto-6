import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import Rank from './Rank.js';
import {
  validateAmount,
  validateWinningNumbers,
  validateBonusNumber,
} from './utils/validate.js';
import { RANK_INFO } from './constants.js';

class App {
  amount;
  lottos = [];
  lottosCount;
  winningNumbers = [];
  bonusNumber;
  ranks = [];

  async play() {
    await this.start();
    this.getLottos();
    this.printLottos();
    await this.getWinningNumbers();
    await this.getBonusNumber();
    this.getLottoRanking();
    this.printLottoRanking();
  }

  async enterAmount() {
    this.amount = await MissionUtils.Console.readLineAsync(
      '구입금액을 입력해 주세요.\n'
    );
  }

  async start() {
    while (!this.amount) {
      try {
        await this.enterAmount();
        validateAmount(this.amount);
      } catch (error) {
        this.amount = 0;
        MissionUtils.Console.print(error.message);
      } finally {
        MissionUtils.Console.print('');
      }
    }
  }

  getLottoNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  getLottos() {
    this.lottosCount = parseInt(this.amount / 1000);
    for (let i = 0; i < this.lottosCount; i += 1) {
      const lotto = new Lotto(this.getLottoNumbers());
      this.lottos.push(lotto);
    }
  }

  printLottos() {
    MissionUtils.Console.print(`${this.lottosCount}개를 구매했습니다.`);
    let i = 0;
    while (i < this.lottosCount) {
      MissionUtils.Console.print('[' + this.lottos[i].numbers.join(', ') + ']');
      i += 1;
    }
    MissionUtils.Console.print('');
  }

  async enterWinningNumbers() {
    const numbers = await MissionUtils.Console.readLineAsync(
      '당첨 번호를 입력해 주세요.\n'
    );
    this.winningNumbers = numbers.split(',').map(Number);
  }

  async getWinningNumbers() {
    while (!this.winningNumbers.length) {
      try {
        await this.enterWinningNumbers();
        validateWinningNumbers(this.winningNumbers);
      } catch (error) {
        this.winningNumbers = [];
        MissionUtils.Console.print(error.message);
      } finally {
        MissionUtils.Console.print('');
      }
    }
  }

  async enterBonusNumber() {
    this.bonusNumber = +(await MissionUtils.Console.readLineAsync(
      '보너스 번호를 입력해 주세요.\n'
    ));
  }

  async getBonusNumber() {
    while (!this.bonusNumber) {
      try {
        await this.enterBonusNumber();
        validateBonusNumber(this.winningNumbers, this.bonusNumber);
      } catch (error) {
        this.bonusNumber = 0;
        MissionUtils.Console.print(error.message);
      } finally {
        MissionUtils.Console.print('');
      }
    }
  }

  setRanks() {
    for (let i = 0; i < 5; i += 1) {
      const rank = new Rank(
        RANK_INFO[i].ranking,
        RANK_INFO[i].matchNumbers,
        RANK_INFO[i].winnings
      );
      this.ranks.push(rank);
    }
  }

  getLottoRanking() {
    this.setRanks();
    for (let i = 0; i < this.lottosCount; i += 1) {
      const ranking = this.lottos[i].getRanking(
        this.winningNumbers,
        this.bonusNumber
      );
      this.ranks.map((rank) => rank.ranking === ranking && rank.count++);
    }
  }

  getEarningsRate() {
    let winningAmount = 0;
    this.ranks.map((rank) => {
      if (rank.count) {
        winningAmount += rank.winnings * rank.count;
      }
    });
    const earningsRate = (winningAmount / this.amount) * 100;
    return (
      earningsRate.toLocaleString('ko-kr', { minimumFractionDigits: 1 }) + '%'
    );
  }

  printLottoRanking() {
    MissionUtils.Console.print('당첨 통계');
    MissionUtils.Console.print('---');
    for (let i = 0; i < this.ranks.length; i += 1) {
      this.ranks[i].printRank();
    }
    MissionUtils.Console.print(`총 수익률은 ${this.getEarningsRate()}입니다.`);
  }
}

export default App;
