import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import Validator from '../model/Validator.js';
import Calculate from '../model/Calculate.js';
import LottoGenerator from '../model/LottoGenerator.js';
import Lotto from '../Lotto.js';
import Bonus from '../model/Bonus.js';
import { Console } from '@woowacourse/mission-utils';

export default class LottoController {
  #lottoAmount;
  #lottoList;
  #correctNumbers;
  #lotto;
  #bonus;

  constructor() {
    this.generate = new LottoGenerator();
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
    this.#lottoAmount = Calculate.countLottoAmounnt(inputValue);
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
      this.#correctNumbers = inputValue.split(',').map(number => Number(number));
      this.#lotto = new Lotto(this.#correctNumbers);
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
      this.#bonus = new Bonus(bonusNumber, this.#lotto);
    } catch (error) {
      OutputView.printError(error);
      this.inputBonusNumber();
    }
  }
}
