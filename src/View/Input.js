import { Console } from "@woowacourse/mission-utils";

export default class Input {
  async getPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(
      "구매금액을 입력해 주세요."
    );
    return purchaseAmount;
  }

  async getWinningNumbers() {
    const winningNumbers = await Console.readLineAsync(
      "당첨 번호를 입력해 주세요."
    );

    return winningNumbers;
  }

  async getBonusNumber() {
    const bonusNumber = await Console.readLineAsync(
      "보너스 번호를 입력해 주세요."
    );

    return bonusNumber;
  }
}
