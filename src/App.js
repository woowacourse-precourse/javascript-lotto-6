import InputView from "./View/InputView.js";
import OutputView from "./View/OutputView.js";
import Validator from "./Validator.js";
import { COMMA, FIFTH_PRIZE, FIRST_PRIZE, FOURTH_PRIZE, FULL_PERCENTAGE_NUMBER, INITIAL_VALUE, SECOND_PRIZE, THIRD_PRIZE } from "./constants/constants.js";
import LottoGenerator from './LottoGenerator.js';

class App {
  #purchaseAmount
  #lottoGenerator;
  #lottos;
  #drawnLotto = {
    numbers: [],
    bonusNumber: 0,
  };
  #result = {
    fifthPlaceWin: INITIAL_VALUE,
    fourthPlaceWin: INITIAL_VALUE,
    thirdPlaceWin: INITIAL_VALUE,
    secondPlaceWin: INITIAL_VALUE,
    firstPlaceWin: INITIAL_VALUE,
  };
  #incomePercentage;

  async play() {
    await this.initializePurchaseAmount();
    this.#lottos = this.#lottoGenerator.generateLottos();
    OutputView.printLotteries(this.#lottos);

    await this.initializeLottoNumber();
    await this.initializeBonusNumber();
    this.checkResult();
    OutputView.printResult(this.#result);
    OutputView.printIncomePercentage(this.#incomePercentage);
  }

  async initializePurchaseAmount() {
    try {
      this.#purchaseAmount = await InputView.readPurchaseAmount();
      Validator.validatePurchaseAmount(this.#purchaseAmount);

      this.#lottoGenerator = new LottoGenerator(this.#purchaseAmount);
    } catch (error) {
      OutputView.print(error);
      await this.initializePurchaseAmount();
    }
  }

  async initializeLottoNumber() {
    try {
      const lottoNumberInput = await InputView.readLottoNumber();
      const lottoNumber = lottoNumberInput.split(COMMA);
      Validator.validateLottoNumbers(lottoNumber);

      this.#drawnLotto.numbers = lottoNumber;
    } catch (error) {
      OutputView.print(error);
      await this.initializeLottoNumber();
    }
  }

  async initializeBonusNumber() {
    try {
      const bonusNumber = await InputView.readBonusNumber();
      Validator.validateBonusNumber(bonusNumber, this.#drawnLotto.numbers);

      this.#drawnLotto.bonusNumber = bonusNumber;
    } catch (error) {
      OutputView.print(error);
      await this.initializeBonusNumber();
    }
  }

  checkResult() {
    const results = this.#lottos.map(lotto => lotto.checkLotto(this.#drawnLotto));
    results.map(element => {
      this.#result = this.mergeAndAddValues(this.#result, element);
    });

    this.#incomePercentage = this.calculateIncomePercentage(this.#purchaseAmount);
  }

  mergeAndAddValues(object1, object2) {
    const keys = new Set([...Object.keys(object1), ...Object.keys(object2)]);
    return Array.from(keys).reduce((result, key) => {
      result[key] = (object1[key] || 0) + (object2[key] || 0);
      return result;
    }, {});
  }

  calculateIncome() {
    return FIFTH_PRIZE * Number(this.#result.fifthPlaceWin) +
      FOURTH_PRIZE * Number(this.#result.fourthPlaceWin) +
      THIRD_PRIZE * Number(this.#result.thirdPlaceWin) +
      SECOND_PRIZE * Number(this.#result.secondPlaceWin) +
      FIRST_PRIZE * Number(this.#result.firstPlaceWin);
  }

  calculateIncomePercentage(purchaseAmount) {
    return this.calculateIncome() / Number(purchaseAmount) * FULL_PERCENTAGE_NUMBER;
  }
}

export default App;
