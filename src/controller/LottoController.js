import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import Validator from "../model/Validator.js";
import Calculate from "../model/Calculate.js";
import { Console } from "@woowacourse/mission-utils";

export default class LottoController {
  #lottoAmount;

  constructor() {}

  async start() {
    await this.initializeLottoAmount();
    OutputView.printLottoAmount(this.#lottoAmount);
  }

  async initializeLottoAmount() {
    const moneyInput = await InputView.moneyInput();
    this.#validate(moneyInput, Validator.moneyCheck);
    this.#lottoAmount = Calculate.countLottoAmounnt(moneyInput);
  }

  // 유효성 검사로 가는 함수
  #validate(inputValue, checkingFunction) {
    try {
      checkingFunction(inputValue);
    } catch (error) {
      OutputView.printError(error);
      this.initializeLottoAmount();
    }
  }
}
