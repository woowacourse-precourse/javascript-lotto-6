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
      this.purchaseLotto();
      await this.getUserLottoInput();
    } catch (error) {
      Print.showErrorMessage(error.message);
      await this.play();
    }
  }

  purchaseLotto() {
    const purchase = new Purchase(this.#sum);
    const amount = purchase.getAmount();
    this.#lottos = purchase.getLottos();

    Print.showPurchaseMessage(amount);
    this.#lottos.forEach((lotto) => {
      Print.showLotto(lotto);
    });
  }

  async getUserLottoInput() {
    try {
      const userLottoInput = await Print.getUserLottoNumber();
      Validate.isOnlyNumberAndComma(userLottoInput);
      this.createUserLotto(userLottoInput);
      await this.getUserBonusInput();
    } catch (error) {
      Print.showErrorMessage(error.message);
      await this.getUserLottoInput();
    }
  }

  createUserLotto(input) {
    const numbersArray = Utils.convertStringIntoNumberArray(input);
    const validUserLotto = new Lotto(numbersArray);
    this.#userLotto = validUserLotto.getUserLotto();
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
