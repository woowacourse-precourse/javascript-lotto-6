import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import Validator from "../model/Validator.js";
import { Console } from "@woowacourse/mission-utils";

export default class LottoController {
  #lottoAmount;

  constructor() {}

  async start() {
    await this.initializeLottoAmount();
  }

  async initializeLottoAmount() {
    const moneyInput = await InputView.moneyInput();
    this.#validate(moneyInput, Validator.moneyCheck);
    this.#countLotto(moneyInput);
    // Console.print(this.#lottoAmount);
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

  // 로또 개수 count
  #countLotto(moneyInput) {
    this.#lottoAmount = parseInt(Number(moneyInput) / 1000);
  }
}
