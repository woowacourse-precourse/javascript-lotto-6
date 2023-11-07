import { Console } from "@woowacourse/mission-utils";
import { MATCHED_RESULT } from "./LottoResult.js";
import { MATCHED_RESULT_TO_PRICE } from "./TotalLottoResult.js";
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

    const logs = [`${count}개를 구매했습니다.`, formattedLottoInfos];
    return logs.join("\n");
  },
  statistics: (totalLottoResult, profitRate) => {
    const result = totalLottoResult.getResult();
    const priceFormat = (num) => num.toLocaleString("ko-KR");

    const logs = [
      `당첨 통계`,
      `---`,
      `3개 일치 (${priceFormat(
        MATCHED_RESULT_TO_PRICE[MATCHED_RESULT.three],
      )}원) - ${result[MATCHED_RESULT.three]}개`,
      `4개 일치 (${priceFormat(
        MATCHED_RESULT_TO_PRICE[MATCHED_RESULT.four],
      )}원) - ${result[MATCHED_RESULT.four]}개`,
      `5개 일치 (${priceFormat(
        MATCHED_RESULT_TO_PRICE[MATCHED_RESULT.five],
      )}원) - ${result[MATCHED_RESULT.five]}개`,
      `5개 일치, 보너스 볼 일치 (${priceFormat(
        MATCHED_RESULT_TO_PRICE[MATCHED_RESULT.fiveBonus],
      )}원) - ${result[MATCHED_RESULT.fiveBonus]}개`,
      `6개 일치 (${priceFormat(
        MATCHED_RESULT_TO_PRICE[MATCHED_RESULT.six],
      )}원) - ${result[MATCHED_RESULT.six]}개`,
      `총 수익률은 ${profitRate}%입니다.`,
    ];
    return logs.join("\n");
  },
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
