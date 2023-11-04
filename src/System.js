import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE, INPUT_MESSAGE } from "./constants/constants";

class System {
  async getMoney() {
    let money = 0;
    while (true) {
      try {
        const inputMoney = await this.#getInputMoney();
        money = Number(inputMoney);
        this.#validateMoney(money);
        this.#validateMoneyFormat(money);

        break;
      } catch (error) {
        await Console.print(error.message);
      }
    }

    return money;
  }

  // 사용자로부터 금액을 입력받는 부분
  async #getInputMoney() {
    const inputMoney = await Console.readLineAsync(INPUT_MESSAGE.money);
    return inputMoney;
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
}

export default System;
