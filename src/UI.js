import { Console } from "@woowacourse/mission-utils";
import InputValidator from "./InputValidator";

const TEXT = {
  askAmount: "구입금액을 입력해 주세요.",
};

class UI {
  #validator;

  constructor() {
    this.#validator = new InputValidator();
  }

  async #ask(message) {
    return Console.readLineAsync(message);
  }

  async askAmountForPurchase() {
    const input = await this.#ask(TEXT.askAmount);
    this.#validator.validateAmount(input.trim());
    return Number(input);
  }
}

export default UI;
