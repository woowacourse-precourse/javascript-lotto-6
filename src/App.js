import { Console, Random } from '@woowacourse/mission-utils';
import { LOTTO, INPUT, OUTPUT, ERROR } from './Constant';
import ValidationCheck from './Validation';
import BuyLotto from './BuyLotto';
import Lotto from './Lotto';

class App {
  async play() {
    const purchasedLotto = await this.getPurchaseLotto();
    const winningNumber = await this.getWinningNumber();
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
        const winningNumbers = await Console.readLineAsync(
          INPUT.WINNING_NUMBER,
        );
        const winningLotto = new Lotto(winningNumbers.split(OUTPUT.COMMA));
        winningNumber = winningNumbers;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return winningNumber;
  }
}

export default App;
