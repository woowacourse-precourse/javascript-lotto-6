import Print from "./Print.js";
import Validate from "./Validate.js";
import Utils from "./Utils.js";
import Purchase from "./Purchase.js";
import Lotto from "./Lotto.js";
import Result from "./Result.js";

class App {
  #sum;
  #lottos;
  #userLotto;
  #bonus;

  async play() {
    try {
      this.#sum = await Print.getPurchaseSum();
      this.checkValidPurchaseSum();
      const amount = Utils.getLottoAmount(this.#sum);
      this.purchaseLotto(amount);
      await this.getUserLottoInput();
    } catch (error) {
      Print.showErrorMessage(error.message);
      await this.play();
    }
  }

  checkValidPurchaseSum() {
    const validate = new Validate();
    validate.isValidPurchaseSum(this.#sum);
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
      const [statistics, earningRate] = this.calculateResult();
      this.showLottoResult(statistics);
      this.showEarningRate(earningRate);
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
    const earningRate = result.getEarningRate(this.#sum);

    return [statistics, earningRate];
  }

  showLottoResult(statistics) {
    Print.showResultPhrase();
    statistics.forEach((statistic, rankIndex) => {
      Print.showStatistic(statistic, rankIndex);
    });
  }

  showEarningRate(rate) {
    Print.showEarningRate(rate);
  }
}

export default App;
