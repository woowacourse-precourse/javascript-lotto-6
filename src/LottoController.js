import Lotto from "./Lotto.js";
import LottoView from "./LottoView.js";
import InputView from "./InputView.js";
import LottoValidator from "./Validator.js";
import CalculateWinners from "./CalculateWinners.js";
import calculateProfit from "./CalculateProfit.js";
import { Console, Random } from "@woowacourse/mission-utils";

class LottoController {
  constructor() {
    this.view = new LottoView();
    this.inputView = new InputView();
    this.lottos = [];
    this.calculateWinners = new CalculateWinners();
    this.validator = new LottoValidator();
  }

  async purchaseLottos() {
    const amount = await this.inputView.askPayment();
    const countOfLotto = amount / 1000;
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
    const winningNumbers = await this.inputView.askWinningNumbers();
    const bonusNumber = await this.inputView.askBonusNumber(winningNumbers);
    const countWinners = this.calculateWinners.manageWinners(
      this.lottos,
      winningNumbers,
      bonusNumber
    );
    this.view.showResults(countWinners);
    this.viewProfitRate(countWinners);
  }

  viewProfitRate(countWinners) {
    const amount = this.lottos.length * 1000;
    const profitRate = calculateProfit(amount, countWinners);
    this.view.showProfitRate(profitRate);
  }
}

export default LottoController;
