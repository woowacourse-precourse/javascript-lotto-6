import { Console, Random } from "@woowacourse/mission-utils";
import InputView from "../View/InputView.js";
import OutputView from "../View/OutputView.js";
import Lotto from "../Lotto.js";

class LottoGame {
  #numberOfPurchase = 0;
  #winningNumbers;
  #bonusNumber;

  async start() {
    const purchaseAmount = await InputView.requestPurchaseAmount();
    this.#numberOfPurchase = purchaseAmount / 1000;

    OutputView.displayNumberOfPurchase(this.#numberOfPurchase);

    for (let i = 0; i < this.#numberOfPurchase; i++){
      const lotto = new Lotto(this.makeLottoNumbers());
      OutputView.displayLotto(lotto.getNumbers());
    }

    const winningNumbers = await InputView.requestWinningNumbers();
    this.#winningNumbers = winningNumbers.split(',').map(Number);

    const bonusNumber = await InputView.requestBonusNumber();
    this.#bonusNumber = bonusNumber;
  }

  makeLottoNumbers() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return numbers;
  }
}

export default LottoGame;
