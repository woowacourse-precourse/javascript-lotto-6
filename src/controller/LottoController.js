import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import Calculate from '../model/Calculate.js';
import LottoGenerator from '../model/LottoGenerator.js';
import Price from '../model/Price.js';
import Lotto from '../Lotto.js';
import Bonus from '../model/Bonus.js';

export default class LottoController {
  #price;
  #lottoAmount;
  #lottoList;
  #lotto;
  #bonus;
  #ranking;
  #benefit;

  constructor() {
    this.calculate = new Calculate();
  }

  async inputPrice() {
    const money = await InputView.moneyInput();
    try {
      new Price(money);
      this.setPriceAndAmount(Number(money));
      OutputView.printLottoAmount(this.#lottoAmount);
      return this.generateLottos();
    } catch (error) {
      OutputView.printError(error);
      this.inputPrice();
    }
  }

  setPriceAndAmount(money) {
    this.#price = money;
    this.#lottoAmount = this.calculate.countLottoAmounnt(money);
  }

  generateLottos() {
    this.#lottoList = LottoGenerator.generateLottoList(this.#lottoAmount);
    OutputView.printLottoList(this.#lottoList);
    return this.inputUserLottoNumber();
  }

  async inputUserLottoNumber() {
    const userLottoNumber = await InputView.lottoNumberInput();
    return this.#lottoNumberValidate(userLottoNumber);
  }

  #lottoNumberValidate(inputValue) {
    try {
      let correctNumbers = inputValue.split(',').map(number => Number(number));
      new Lotto(correctNumbers);
      this.#lotto = correctNumbers;
      return this.inputBonusNumber();
    } catch (error) {
      OutputView.printError(error);
      this.inputUserLottoNumber();
    }
  }

  async inputBonusNumber() {
    const bonusNumber = await InputView.bonusNumberInput();
    this.#bonusNumberValidate(bonusNumber);
  }

  #bonusNumberValidate(bonusNumber) {
    try {
      new Bonus(bonusNumber, this.#lotto);
      this.#bonus = bonusNumber;
      this.#calculateRank();
    } catch (error) {
      OutputView.printError(error);
      this.inputBonusNumber();
    }
  }

  async #calculateRank() {
    this.#ranking = await this.calculate.countRanking(this.#lottoList, this.#lotto, this.#bonus);
    this.#benefit = this.calculate.calculateBenefit(this.#ranking, this.#price);
    this.#printResult();
  }

  #printResult() {
    OutputView.printAllResult(this.#ranking, this.#benefit);
  }
}
