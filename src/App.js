import { Console } from '@woowacourse/mission-utils';
import { ERROR, INPUT, LOTTO, OUTPUT } from './Constant';
import BuyLotto from './BuyLotto';
import Lotto from './Lotto';
import Calculation from './Calculation';

class App {
  async play() {
    const purchasedLotto = await this.getPurchaseLotto();
    const winningNumber = await this.getWinningNumber();
    const bonusNumer = await this.getBonusNumber(winningNumber);

    const calc = new Calculation(purchasedLotto, winningNumber, bonusNumer);
    calc.checkMatchNumbers();
    calc.calcTotalReturn();
  }

  async getPurchaseLotto() {
    let purchasedLotto;
    while (!purchasedLotto) {
      try {
        const price = await Console.readLineAsync(INPUT.PURCHASE_AMOUNT);
        const buyLotto = new BuyLotto(price);
        purchasedLotto = buyLotto.getLottos();
      } catch (error) {
        Console.print(error.message);
      }
    }

    return purchasedLotto;
  }

  async getWinningNumber() {
    let winningNumber;
    while (!winningNumber) {
      try {
        const inputNumbers = await Console.readLineAsync(INPUT.WINNING_NUMBER);
        const winningLotto = new Lotto(inputNumbers.split(OUTPUT.COMMA));
        winningNumber = winningLotto.getLottoNumbers();
      } catch (error) {
        Console.print(error.message);
      }
    }

    return winningNumber.map(number => Number(number));
  }

  async getBonusNumber(winningNumber) {
    let bonusNumber;
    while (!bonusNumber) {
      try {
        const inputBonus = await Console.readLineAsync(INPUT.BONUS_NUMBER);
        this.#validateBonus(inputBonus, winningNumber);
        bonusNumber = inputBonus;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return bonusNumber;
  }

  #validateBonus(bonusNumber, winningNumber) {
    if (!bonusNumber || !bonusNumber.trim()) {
      throw new Error(`${ERROR.PREFIX} ${INPUT.BONUS_NUMBER}`);
    }
    if (LOTTO.REG_NUMBER.test(bonusNumber)) {
      throw new Error(ERROR.BONUS_ONLY_NUMBER);
    }
    if (winningNumber.includes(bonusNumber)) {
      throw new Error(ERROR.BONUS_NOT_WINNING);
    }
  }
}

export default App;
