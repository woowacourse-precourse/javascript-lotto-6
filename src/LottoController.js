import Lotto from "./Lotto.js";
import LottoView from "./LottoView.js";
import LottoValidator from "./Validator.js";
import CalculateWinners from "./CalculateWinners.js";
import { Random } from "@woowacourse/mission-utils";

class LottoController {
  constructor() {
    this.view = new LottoView();
    this.lottos = [];
    this.calculateWinners = new CalculateWinners();
  }

  async purchaseLottos() {
    const amount = await this.view.askPayment();
    const countOfLotto = amount / 1000;
    LottoValidator.validatePurchaseAmount(amount);
    this.lottos = this.makeLottoNumbers(countOfLotto);
    this.view.showLottoNumbers(countOfLotto, this.lottos);
  }

  makeLottoNumbers(countOfLotto) {
    return Array.from({ length: countOfLotto }, () => {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      return new Lotto(numbers);
    });
  }

  async viewResults() {
    const winningNumbers = await this.view.askWinningNumbers();
    const bonusNumber = await this.view.askBonusNumber();
    const countWinners = this.calculateWinners.manageWinners(
      this.lottos,
      winningNumbers,
      bonusNumber
    );
    this.view.showResults(countWinners);
  }
}

export default LottoController;
