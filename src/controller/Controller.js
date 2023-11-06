import Money from '../model/Money.js';
import BonusNumber from '../model/BonusNumber.js';
import Lotto from '../model/Lotto.js';

import OutputView from '../view/OutputView.js';
import InputView from '../view/InputView.js';

import calculateMatch from '../util/calculateMatch.js';
import calculateTotal from '../util/calculateTotal.js';
import calcultePercent from '../util/calcultePercent.js';
import checkMatch from '../util/checkMatch.js';

import { MESSAGE } from '../constants/message.js';

class Controller {
  #lotto;

  #bonus;

  #money;

  async lottoStart() {
    await this.#initMoney();
    await this.#initlotto();
    await this.#initBonus();
    this.#calculateLotto(
      this.#money.getLottoList(),
      this.#lotto.getLotto(),
      this.#bonus.getBonusNumber(),
      this.#money.getMatch(),
    );
    this.#calculateRate();
  }

  async #initMoney() {
    while (true) {
      const input = await InputView.writeInput(MESSAGE.PURCHASING_MESSAGE);
      try {
        this.#money = new Money(input);
        OutputView.printPurchacingLotto(this.#money.getCount(), this.#money.getLottoList());
        break;
      } catch (e) {
        OutputView.printError(e.message);
      }
    }
  }

  async #initlotto() {
    while (true) {
      const input = await InputView.writeInput(MESSAGE.WINNING_NUMBERS);
      try {
        this.#lotto = new Lotto(input);
        break;
      } catch (e) {
        OutputView.printError(e.message);
      }
    }
  }

  async #initBonus() {
    while (true) {
      const input = await InputView.writeInput(MESSAGE.BONUS_NUMBER);
      try {
        this.#bonus = new BonusNumber(input, this.#lotto.getLotto());
        break;
      } catch (e) {
        OutputView.printError(e.message);
      }
    }
  }

  /**
   *
   * @param {number[][]} lottoList
   * @param {number[]} lotto
   * @param {number} bonus
   * @param {{[key:string]: number}} match
   */
  #calculateLotto(lottoList, lotto, bonus, match) {
    lottoList.forEach((item) => {
      const { matchCount, bonusMatch } = calculateMatch(item, lotto, bonus);
      checkMatch(matchCount, bonusMatch, match);
    });
    OutputView.printWinningStatistics();
    OutputView.printMatching(match);
  }

  #calculateRate() {
    const total = calculateTotal(this.#money.getMatch());
    const rate = calcultePercent(total, this.#money.getMoney());
    OutputView.printRateOfReturn(rate);
  }
}

export default Controller;
