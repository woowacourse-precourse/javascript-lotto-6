import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import Validator from '../model/Validator.js';
import Calculate from '../model/Calculate.js';
import LottoGenerator from '../model/LottoGenerator.js';
import Lotto from '../Lotto.js';
import Bonus from '../model/Bonus.js';
import { Console } from '@woowacourse/mission-utils';

export default class LottoController {
  #price;
  #lottoAmount;
  #lottoList;
  #lotto;
  #bonus;
  #ranking;
  #benefit;

  constructor() {
    this.generate = new LottoGenerator();
    this.calculate = new Calculate();
  }

  async start() {
    await this.initializeLottoAmount();
  }

  async initializeLottoAmount() {
    const moneyInput = await InputView.moneyInput();
    this.#validate(moneyInput, Validator.moneyCheck);
  }

  // 가격유효성 검사로 가는 함수
  #validate(inputValue, checkingFunction) {
    try {
      checkingFunction(inputValue);
      this.generateLottos(inputValue);
    } catch (error) {
      OutputView.printError(error);
      this.initializeLottoAmount();
    }
  }

  async generateLottos(inputValue) {
    this.#price = inputValue;
    this.#lottoAmount = this.calculate.countLottoAmounnt(inputValue);
    this.#lottoList = this.generate.startGenerate(this.#lottoAmount);
    OutputView.printLottoList(this.#lottoList);
    this.inputUserLottoNumber();
  }

  async inputUserLottoNumber() {
    const userLottoNumber = await InputView.lottoNumberInput();
    this.#lottoNumberValidate(userLottoNumber);
  }

  #lottoNumberValidate(inputValue) {
    try {
      // this.#correctNumbers = inputValue.split(',');
      let correctNumbers = inputValue.split(',').map(number => Number(number));
      new Lotto(correctNumbers);
      this.#lotto = correctNumbers;
      this.inputBonusNumber();
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
    Console.print([this.#ranking, this.#benefit]);
  }
}
