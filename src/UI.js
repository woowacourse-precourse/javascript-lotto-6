import { Console } from "@woowacourse/mission-utils";
import InputValidator from "./InputValidator";

const TEXT = {
  askAmount: "구입금액을 입력해 주세요.",
  askWinningNumbers: "당첨 번호를 입력해 주세요.",
  askBonusLottoNumber: "보너스 번호를 입력해 주세요.",
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

  async askWinningNumbers() {
    const input = await this.#ask(TEXT.askWinningNumbers);
    const trimmedInput = input
      .trim()
      .split(",")
      .map((v) => v.trim())
      .join(",");
    this.#validator.validateWinningNumbers(trimmedInput);
    return trimmedInput.split(",").map(Number);
  }

  async askBonusLottoNumber(winningNumbers) {
    const input = await this.#ask(TEXT.askBonusLottoNumber);
    this.#validator.validateBonusNumber(input.trim(), winningNumbers);
    return Number(input);
  }
}

export default UI;
