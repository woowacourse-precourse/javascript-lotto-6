import InputView from '../View/InputView.js';
import { BASE_AMOUNT } from '../constant/constant.js';
import Lotto from '../Lotto.js';
import { SEPARATOR } from '../constant/message.js';
import WinningNumbers from '../model/WinningNumbers.js';
import OutputView from '../View/OutputView.js';

class LottoGameController {
  async startGame() {
    const purchaseQuantity = await this.#getPurchaseQuantity();
    OutputView.printPurchaseQuantity(purchaseQuantity);

    const winningLotto = await this.#getWinningLotto();
    const winningNumbers = await this.#getWinningNumber();
  }

  async #getPurchaseQuantity() {
    const purchaseAmount = await InputView.readPurchaseAmount();

    return Number(purchaseAmount) / BASE_AMOUNT;
  }

  async #getWinningLotto() {
    const winningLottoNumbers = await InputView.readWinningLotto();
    const splitNumbers = this.#splitNumbers(winningLottoNumbers);

    return new Lotto(splitNumbers);
  }

  async #getWinningNumber(winningLotto) {
    const bonusNumber = await InputView.readBonusNumber();

    return new WinningNumbers(winningLotto, bonusNumber);
  }

  #splitNumbers(numbers) {
    return numbers.split(SEPARATOR).map((number) => number.trim());
  }
}
export default LottoGameController;
