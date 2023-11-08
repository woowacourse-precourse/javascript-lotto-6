import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE, INPUT_MESSAGE } from "./constants/constants";

class Money {
  #money;
  constructor(money) {
    this.#money = money;
  }

  async initialize() {
    this.money = await this.#getMoney();
  }

  async #getMoney() {
    let money = 0;
    while (true) {
      try {
        money = await this.#retrieveValidMoney();
        break;
      } catch (error) {
        await Console.print(error.message);
      }
    }
    this.#money = money;
    return money;
  }

  async #retrieveValidMoney() {
    const inputMoney = await this.#getInputMoney();
    const money = this.#validateAndConvertMoney(inputMoney);
    return money;
  }

  // 사용자로부터 금액을 입력받는 부분
  async #getInputMoney() {
    const inputMoney = await Console.readLineAsync(INPUT_MESSAGE.money);
    return inputMoney;
  }

  // 숫자로 바꾸고 유효성 검사
  #validateAndConvertMoney(inputMoney) {
    const money = Number(inputMoney);
    this.#validateMoney(money);
    this.#validateMoneyFormat(money);
    return money;
  }

  // 금액의 유효성을 검사하는 부분
  #isMoneyInvalid(inputMoney) {
    return Object.is(inputMoney, NaN);
  }

  // 금액의 유효성을 검사하는 부분
  #validateMoney(money) {
    if (this.#isMoneyInvalid(money)) {
      throw new Error(ERROR_MESSAGE.invalidMoneyError);
    }
  }

  // 금액이 1000원 단위인지 검사하는 부분
  #isAmountInValid(money) {
    return money % 1000 !== 0 || money < 1000;
  }

  // 금액이 1000원 단위인지 검사하는 부분
  #validateMoneyFormat(money) {
    if (this.#isAmountInValid(money)) {
      throw new Error(ERROR_MESSAGE.moneyFormatErrorMessage);
    }
  }

  getMoney() {
    return this.#money;
  }

  async getLottoCount() {
    return Math.floor(this.#money / 1000);
  }
}

export default Money;
