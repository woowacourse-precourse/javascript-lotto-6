import { Random } from "@woowacourse/mission-utils";
import InputView from "../View/InputView.js";
import OutputView from "../View/OutputView.js";
import Lotto from "../Lotto.js";
import Lottos from "../Lottos.js";
import Winning from "../Winning.js";
import {
  LOTTO_TICKET_PRICE,
  RANGE_OF_LOTTO_NUMBER,
  LOTTO_NUMBERS_COUNT
} from "../Constants/Constant.js";

class LottoGame {
  lottos = new Lottos();
  purchaseAmount;

  async playGame() {
    await this.buyLotto();
    await this.inputWinningNumbers();
  }

  async buyLotto() {
    this.purchaseAmount = await InputView.requestPurchaseAmount();
    const numberOfPurchase = this.purchaseAmount / LOTTO_TICKET_PRICE;

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
    const numbers = Random.pickUniqueNumbersInRange(RANGE_OF_LOTTO_NUMBER.min, RANGE_OF_LOTTO_NUMBER.max, LOTTO_NUMBERS_COUNT);
    return numbers;
  }
}

export default LottoGame;
