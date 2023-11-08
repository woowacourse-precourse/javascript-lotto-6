import Lotto from './Lotto';
import User from './User';
import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from '../constants/messages';

class Game {
  #user;
  #lottoCount;
  #lottoList;

  constructor() {
    this.#user = new User();
    this.#lottoCount = null;
    this.#lottoList = [];
  }

  async playGame() {
    this.#lottoCount = await this.#user.calculateLottoCount();
    this.generateLottoNumbers();
    this.printLottoNumbers();
    const winningNumbers = await this.#user.getWinningNumbers();
    const bonusNumber = await this.#user.getBonusNumber();
    const stats = this.compareWinningNumbers(winningNumbers, bonusNumber);
    this.printWinningResult(stats);
  }

  generateLottoNumbers() {
    const initialLottoNumbers = [1, 2, 3, 4, 5, 6];

    for (let i = 0; i < this.#lottoCount; i += 1) {
      const lotto = new Lotto(initialLottoNumbers);
      lotto.generateRandomNumbers();
      this.#lottoList.push(lotto.getNumbers());
    }
  }

  printLottoNumbers() {
    this.#lottoList.forEach((lottoNumbers) => {
      Console.print(`[${lottoNumbers.join(', ')}]`);
    });
  }

  compareWinningNumbers(winningNumbers, bonusNumber) {
    const stats = {
      3: { prize: '5,000원', count: 0 },
      4: { prize: '50,000원', count: 0 },
      5: { prize: '1,500,000원', count: 0 },
      five_b: { prize: '30,000,000원', count: 0 },
      6: { prize: '2,000,000,000원', count: 0 },
    };

    this.#lottoList.forEach((userLotto) => {
      const matchCount = this.countMatchingNumbers(userLotto, winningNumbers);
      const hasBonusNumber = userLotto.includes(bonusNumber);

      if (matchCount === 5 && hasBonusNumber) {
        stats['five_b'].count += 1;
      } else if (matchCount >= 3) {
        stats[matchCount].count += 1;
      }
    });

    return stats;
  }

  countMatchingNumbers(lotto, winningNumbers) {
    return lotto.filter((num) => winningNumbers.includes(num)).length;
  }

  printWinningResult(stats) {
    Console.print(MESSAGES.game.resultTitle);
    Console.print(MESSAGES.game.separator);

    const prizeKeys = [3, 4, 5, 'five_b', 6];

    prizeKeys.forEach((key) => {
      const prize = stats[key].prize;
      const count = stats[key].count;
      const message = count === 0 ? `0개` : `${count}개`;
      const matchMessage =
        key === 'five_b'
          ? MESSAGES.winning.matchFiveAndBonus
          : `${key}` + MESSAGES.winning.matchN;
      Console.print(`${matchMessage} (${prize}) - ${message}`);
    });

    const totalPrize = this.calculateTotalPrize(stats);
    if (totalPrize === 0) {
      Console.print(MESSAGES.game.zeroRevenueRate);
      Console.print(MESSAGES.game.noWinnning);
      return;
    }

    const revenueRate = (
      (totalPrize / (this.#lottoCount * 1000)) *
      100
    ).toFixed(1);
    Console.print(`총 수익률은 ${revenueRate}%입니다.`);
  }

  calculateTotalPrize(stats) {
    let totalPrize = 0;

    [3, 4, 5, 'five_b', 6].forEach((key) => {
      const count = stats[key].count;
      const prize = stats[key].prize;
      totalPrize += count * parseInt(prize.replace(/,/g, ''));
    });

    return totalPrize;
  }
}

export default Game;
