import { Console } from "@woowacourse/mission-utils";
import InputValidator from "./InputValidator.js";

const TEXT = {
  askAmount: "구입금액을 입력해 주세요.",
  askWinningNumbers: "당첨 번호를 입력해 주세요.",
  askBonusLottoNumber: "보너스 번호를 입력해 주세요.",
};

const printFormat = {
  purchaseInformation: (lottoInformations) => {
    const count = lottoInformations.length;
    const formattedLottoInfos = lottoInformations
      .map((info) => `[${info.join(", ")}]`)
      .join("\n");
    return `${count}개를 구매했습니다.
${formattedLottoInfos}`;
  },
  statistics: (totalLottoResult, profitRate) => `당첨 통계
---
3개 일치 (5,000원) - ${totalLottoResult.three}개
4개 일치 (50,000원) - ${totalLottoResult.four}개
5개 일치 (1,500,000원) - ${totalLottoResult.five}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${totalLottoResult.fiveBonus}개
6개 일치 (2,000,000,000원) - ${totalLottoResult.six}개
총 수익률은 ${profitRate}%입니다.`,
};

class UI {
  #validator;

  constructor() {
    this.#validator = new InputValidator();
  }

  async #ask(message) {
    return Console.readLineAsync(`${message}\n`);
  }

  async #waitAnswer() {
    return Console.readLineAsync("");
  }

  print(message = "") {
    Console.print(message);
  }

  linebreak() {
    this.print();
  }

  async askAmountForPurchase({ again } = { again: false }) {
    const input = again
      ? await this.#waitAnswer()
      : await this.#ask(TEXT.askAmount);
    this.#validator.validateAmount(input.trim());
    return Number(input);
  }

  async askWinningNumbers({ again } = { again: false }) {
    const input = again
      ? await this.#waitAnswer()
      : await this.#ask(TEXT.askWinningNumbers);

    const trimmedInput = input
      .trim()
      .split(",")
      .map((v) => v.trim())
      .join(",");
    this.#validator.validateWinningNumbers(trimmedInput);
    return trimmedInput.split(",").map(Number);
  }

  async askBonusLottoNumber(winningNumbers, { again } = { again: false }) {
    const input = again
      ? await this.#waitAnswer()
      : await this.#ask(TEXT.askBonusLottoNumber);

    this.#validator.validateBonusNumber(input.trim(), winningNumbers);
    return Number(input);
  }

  printLottoPurchaseInformation(lottoInformations) {
    this.print(printFormat.purchaseInformation(lottoInformations));
  }

  printStatistics(totalLottoResult, profitRate) {
    this.print(printFormat.statistics(totalLottoResult, profitRate));
  }
}

export default UI;
