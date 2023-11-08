import Money from '../model/Money.js';
import BonusNumber from '../model/BonusNumber.js';
import Lotto from '../model/Lotto.js';

import OutputView from '../view/OutputView.js';
import InputView from '../view/InputView.js';

import Calculate from '../util/Calculate.js';

import { MESSAGE, MESSAGE_MAKE_FN } from '../constants/message.js';

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
      try {
        const input = await InputView.writeInput(MESSAGE.PURCHASING_MESSAGE);
        this.#money = new Money(input);
        OutputView.printOutput(MESSAGE_MAKE_FN.makeNumberOfLottoMessageFn(this.#money.getCount()));
        OutputView.printPurchacingLotto(this.#money.getLottoList());
        break;
      } catch (e) {
        OutputView.printOutput(e.message);
      }
    }
  }

  async #initlotto() {
    while (true) {
      try {
        const input = await InputView.writeInput(MESSAGE.WINNING_NUMBERS);
        this.#lotto = new Lotto(input);
        break;
      } catch (e) {
        OutputView.printOutput(e.message);
      }
    }
  }

  async #initBonus() {
    while (true) {
      try {
        const input = await InputView.writeInput(MESSAGE.BONUS_NUMBER);
        this.#bonus = new BonusNumber(input, this.#lotto.getLotto());
        break;
      } catch (e) {
        OutputView.printOutput(e.message);
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
      const { matchCount, bonusMatch } = Calculate.calculateMatch(item, lotto, bonus);
      Calculate.checkMatch(matchCount, bonusMatch, match);
    });
    OutputView.printOutput(MESSAGE.WINNING_STATISICS);
    OutputView.printMatching(match);
  }

  #calculateRate() {
    const total = Calculate.calculateTotal(this.#money.getMatch());
    const rate = Calculate.calcultePercent(total, this.#money.getMoney());
    OutputView.printOutput(MESSAGE_MAKE_FN.makeRateOfReturnMessageFn(rate));
  }
}

export default Controller;
