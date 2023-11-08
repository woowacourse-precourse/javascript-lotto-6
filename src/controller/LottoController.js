import { Console, MissionUtils } from '@woowacourse/mission-utils';
import { ERROR, GAME } from '../constants/Message.js';
import { readView } from '../view/InputView.js';
import { writeView } from '../view/OutputView.js';
import LottoCount from '../model/LottoCount.js';
import Lotto from '../model/Lotto.js';
import Bonus from '../model/Bonus.js';
import { standard } from '../constants/Standard.js';

class LottoController {
  #lottoCount;
  #winningCount;
  #winningNumbers;
  #bonusNumber;

  async start() {
    await this.getLottoCount();
    await this.getNumbers();
    this.printResult();
  }

  async getLottoCount() {
    try {
      const buyPrice = await readView(GAME.INPUT_BUY_PRICE);
      this.#lottoCount = new LottoCount(buyPrice);
    } catch (error) {
      writeView(error.message);
      await this.getLottoCount();
    }
  }

  async getNumbers() {
    await this.getWinningNumbers();
    await this.getBonusNumbers();
  }

  async getWinningNumbers() {
    try {
      const numbers = await readView(GAME.INPUT_WINNING_NUMBERS);
      const numberArray = numbers.split(',');
      this.#winningNumbers = new Lotto(numberArray).getLottoNumbers();
    } catch (error) {
      writeView(error.message);
      await this.getWinningNumbers();
    }
  }

  async getBonusNumbers() {
    try {
      const number = await readView(GAME.INPUT_BONUS_NUMBER);
      this.#bonusNumber = new Bonus(number).getBonusNumber();
      if (this.#winningNumbers.includes(number)) {
        throw new Error(ERROR.DUPLICATION);
      }
    } catch (error) {
      writeView(error.message);
      await this.getBonusNumbers();
    }
  }

  printResult() {
    writeView(GAME.PRINT_RESULT);
    this.calculateLotto();
    this.printWinningCorrect();
    this.printRate();
  }

  async calculateLotto() {
    this.#winningCount = standard.WINNING_CORRECT_INIT;

    const lottoArr = this.#lottoCount.getLottoArr();
    const winnings = this.#winningNumbers;

    for (let item of lottoArr) {
      this.calculateEachLotto(item, winnings);
    }
  }

  async calculateEachLotto(item, winnings) {
    const correctCount = item.filter((num) => winnings.includes(String(num)));
    let total = correctCount.length;
    if (total === 6) {
      this.#winningCount[4] += 1;
      return;
    }
    total += Number(item.includes(Number(this.#bonusNumber)));
    if (total >= 3) {
      this.#winningCount[total - 3] += 1;
    }
  }

  printWinningCorrect() {
    this.#winningCount.map((item, index) => {
      writeView(GAME.WINNING_CORRECT[index] + ' (' + standard.WINNING_CORRECT_PRICE[index] + '원) - ' + item + '개');
    });
  }

  printRate() {
    let totalSum = 0;
    this.#winningCount.map((item, index) => {
      totalSum += item * parseInt(standard.WINNING_CORRECT_PRICE[index].replace(/,/g, ''));
    });

    const totalRate = (totalSum / this.#lottoCount.getBuyPrice()) * 100;
    Console.print(GAME.RESULT_RATE + Math.floor(totalRate * 100) / 100 + '%입니다.');
  }
}
export default LottoController;
