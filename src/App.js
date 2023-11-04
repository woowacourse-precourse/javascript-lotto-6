import Print from "./Print.js";
import Validate from "./Validate.js";
import Utils from "./Utils.js";
import Purchase from "./Purchase.js";
import Lotto from "./Lotto.js";
import Result from "./Result.js";
import Bonus from "./Bonus.js";

class App {
  #sum;
  #lottos;
  #userLotto;
  #bonus;
  #statistics;
  #earningRate;

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
    const lotto = new Lotto(numbersArray);
    this.#userLotto = lotto.getUserLotto();
  }

  async getUserBonusInput() {
    try {
      const bonusInput = await Print.getUserBonusNumber();
      const bonus = new Bonus(bonusInput, this.#userLotto);
      this.#bonus = bonus.getBonus();
      this.getResult();
    } catch (error) {
      Print.showErrorMessage(error.message);
      await this.getUserBonusInput();
    }
  }

  getResult() {
    this.calculateResult();
    this.showResult();
  }

  calculateResult() {
    const result = new Result(this.#lottos, this.#userLotto, this.#bonus);
    this.#statistics = result.getStatistics();
    this.#earningRate = result.getEarningRate(this.#sum);
  }

  showResult() {
    Print.showResultPhrase();
    this.#statistics.forEach((statistic, rankIndex) => {
      Print.showStatistic(statistic, rankIndex);
    });
    Print.showEarningRate(this.#earningRate);
  }
}

export default App;
