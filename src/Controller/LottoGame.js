import { Random } from "@woowacourse/mission-utils";
import InputView from "../View/InputView.js";
import OutputView from "../View/OutputView.js";
import Lotto from "../Lotto.js";
import Lottos from "../Lottos.js";
import Winning from "../WinningNumbers.js";

class LottoGame {
  lottos = new Lottos();
  purchaseAmount;

  async playGame() {
    await this.buyLotto();
    await this.inputWinningNumbers();
  }

  async buyLotto() {
    this.purchaseAmount = await InputView.requestPurchaseAmount();
    const numberOfPurchase = this.purchaseAmount / 1000;

    OutputView.displayNumberOfPurchase(this.purchaseAmount);

    for (let i = 0; i < numberOfPurchase; i++){
      const lotto = new Lotto(this.makeLottoNumbers());
      this.lottos.addLotto(lotto.getNumbers());
      OutputView.displayLotto(lotto.getNumbers());
    }
  }

  async inputWinningNumbers() {
    const winningNumbers = await InputView.requestWinningNumbers();
    const bonusNumber = await InputView.requestBonusNumber(winningNumbers);

    const winning = new Winning(winningNumbers, bonusNumber, this.lottos);
    winning.compareLottoNumbers();

    OutputView.displayWinningDetails(winning.getRank());

    const rateOfReturn = winning.calculateRateOfReturn(this.purchaseAmount);

    OutputView.displayRateOfReturn(rateOfReturn);
  }

  makeLottoNumbers() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return numbers;
  }
}

export default LottoGame;
