import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class Inputs {
  async inputPrice() {
    try {
      const price = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
      return this.validPrice(price);
    } catch (error) {
      Console.print(error.message);
      return this.inputPrice();
    }
  }

  validPrice(price) {
    const numericPrice = Number(price);
    if (!(numericPrice % 1000 === 0) || isNaN(numericPrice) || !numericPrice) {
      throw new Error("[ERROR] 1,000원 단위의 숫자를 입력해주세요.");
    }
    return numericPrice;
  }

  async inputWinningNumbers() {
    try {
      const winningNumbers = await Console.readLineAsync(
        "당첨 번호를 입력해 주세요.\n"
      );
      const winningLotto = new Lotto(winningNumbers.split(",").map(Number));
      return winningLotto;
    } catch (error) {
      Console.print(error.message);
      return this.inputWinningNumbers();
    }
  }

  async inputBonusNumber(winningLotto) {
    try {
      const bonusNumber = await Console.readLineAsync(
        "보너스 번호를 입력해 주세요.\n"
      );
      return this.validBonusNumber(bonusNumber, winningLotto.getNumbers());
    } catch (error) {
      Console.print(error.message);
      return this.inputBonusNumber();
    }
  }

  validBonusNumber(bonusNumber, winningLotto) {
    const numericBonusNumber = Number(bonusNumber);
    if (
      isNaN(numericBonusNumber) ||
      !Number.isInteger(numericBonusNumber) ||
      !numericBonusNumber ||
      numericBonusNumber <= 0 ||
      numericBonusNumber > 45
    ) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 정수여야 합니다.");
    }

    if (winningLotto.includes(numericBonusNumber)) {
      throw new Error(
        "[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다."
      );
    }
    return numericBonusNumber;
  }
}

export default Inputs;
