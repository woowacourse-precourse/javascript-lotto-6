import Print from "./Print.js";
import Validate from "./Validate.js";
import Utils from "./Utils.js";
import Purchase from "./Purchase.js";
import Lotto from "./Lotto.js";
import Result from "./Result.js";

class App {
  #lottos;
  #userLotto;
  #bonus;

  async play() {
    try {
      const sum = await Print.getPurchaseSum();
      this.checkValidPurchaseSum(sum);
      const amount = Utils.getLottoAmount(sum);
      this.purchaseLotto(amount);
      await this.getUserLottoInput();
    } catch (error) {
      Print.showErrorMessage(error.message);
      await this.play();
    }
  }

  checkValidPurchaseSum(input) {
    const validate = new Validate();
    validate.isValidPurchaseSum(input);
  }

  purchaseLotto(amount) {
    Print.showPurchaseMessage(amount);
    const purchase = new Purchase(amount);
    this.#lottos = purchase.getLottos();
    this.#lottos.forEach((lotto) => {
      Print.showLotto(lotto);
    });
  }

  async getUserLottoInput() {
    try {
      const userLottoInput = await Print.getUserLottoNumber();
      const validUserLotto = new Lotto(userLottoInput);
      this.#userLotto = validUserLotto.getUserLotto();
      await this.getUserBonusInput();
    } catch (error) {
      Print.showErrorMessage(error.message);
      await this.getUserLottoInput();
    }
  }

  async getUserBonusInput() {
    try {
      this.#bonus = await Print.getUserBonusNumber();
      this.checkValidBonusNumber(this.#bonus);
      const statistics = this.calculateResult();
      this.showLottoResult(statistics);
    } catch (error) {
      Print.showErrorMessage(error.message);
      await this.getUserBonusInput();
    }
  }

  checkValidBonusNumber(input) {
    const validate = new Validate();
    validate.isValidBonusNumber(input, this.#userLotto);
  }

  calculateResult() {
    const result = new Result(
      this.#lottos,
      this.#userLotto,
      parseInt(this.#bonus, 10)
    );
    const statistics = result.getStatistics();

    return statistics;
  }

  showLottoResult(statistics) {
    Print.showResultPhrase();
    statistics.forEach((statistic, rankIndex) => {
      Print.showStatistic(statistic, rankIndex);
    });
  }
}

export default App;
