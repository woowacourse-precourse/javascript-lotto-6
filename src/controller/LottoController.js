import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import Validator from "../model/Validator.js";
import { Console } from "@woowacourse/mission-utils";

export default class LottoController {
  constructor() {}

  async start() {
    await this.initializeMoney();
  }

  async initializeMoney() {
    const moneyInput = await InputView.moneyInput();
    this.validate(moneyInput, Validator.moneyCheck);
    // Console.print(moneyInput);
  }

  // 유효성 검사로 가는 함수
  validate(inputValue, checkingFunction) {
    try {
      checkingFunction(inputValue);
    } catch (error) {
      OutputView.printError(error);
      this.initializeMoney();
    }
  }
}
