import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import Calculate from '../model/Calculate.js';
import LottoGenerator from '../model/LottoGenerator.js';
import Price from '../model/Price.js';
import Lotto from '../Lotto.js';
import Bonus from '../model/Bonus.js';
import { SPLITWORD } from '../util/constant.js';

export default class LottoController {
  #price;
  #lottoAmount;
  #lottoList;
  #userLotto;
  #bonus;
  #rank;
  #benefit;

  constructor() {
    this.calculate = new Calculate();
  }

  async inputPrice() {
    const money = await InputView.moneyInput();
    return this.checkPrice(money);
  }

  checkPrice(money) {
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
    return this.inputUserNumber();
  }

  async inputUserNumber() {
    const userInputNumber = await InputView.lottoNumberInput();
    return this.#checkUserLottoNumber(userInputNumber);
  }

  #checkUserLottoNumber(userInputNumber) {
    try {
      let userLottoNumber = userInputNumber.split(SPLITWORD);
      new Lotto(userLottoNumber);
      this.#userLotto = userLottoNumber.map(Number);
      return this.inputBonusNumber();
    } catch (error) {
      OutputView.printError(error);
      this.inputUserNumber();
    }
  }

  async inputBonusNumber() {
    const bonusNumber = await InputView.bonusNumberInput();
    this.#checkBonusNumber(bonusNumber);
  }

  #checkBonusNumber(bonusNumber) {
    try {
      new Bonus(bonusNumber, this.#userLotto);
      this.#bonus = bonusNumber;
      this.#calculateResult();
    } catch (error) {
      OutputView.printError(error);
      this.inputBonusNumber();
    }
  }

  async #calculateResult() {
    this.#rank = await this.calculate.countTotalRanking(this.#lottoList, this.#userLotto, this.#bonus);
    this.#benefit = this.calculate.calculateBenefit(this.#price);
    this.#printResult();
  }

  #printResult() {
    OutputView.printAllResult(this.#rank, this.#benefit);
  }
}
