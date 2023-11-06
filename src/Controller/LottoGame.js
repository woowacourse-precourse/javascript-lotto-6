import { Random } from "@woowacourse/mission-utils";
import InputView from "../View/InputView.js";
import OutputView from "../View/OutputView.js";
import Lotto from "../Lotto.js";
import Lottos from "../Lottos.js";
import Winning from "../WinningNumbers.js";

class LottoGame {
  async start() {
    const purchaseAmount = await InputView.requestPurchaseAmount();
    const numberOfPurchase = purchaseAmount / 1000;

    OutputView.displayNumberOfPurchase(purchaseAmount);

    const lottos = new Lottos();

    for (let i = 0; i < numberOfPurchase; i++){
      const lotto = new Lotto(this.makeLottoNumbers());
      lottos.addLotto(lotto.getNumbers());
      OutputView.displayLotto(lotto.getNumbers());
    }

    const winningNumbers = await InputView.requestWinningNumbers();

    const bonusNumber = await InputView.requestBonusNumber(winningNumbers);

    const winning = new Winning(winningNumbers, bonusNumber, lottos);
    winning.compareLottoNumbers();
    OutputView.displayWinningDetails(winning.getRank());
    const rateOfReturn = winning.calculateRateOfReturn(purchaseAmount);
    OutputView.displayRateOfReturn(rateOfReturn);
  }

  makeLottoNumbers() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return numbers;
  }
}

export default LottoGame;
