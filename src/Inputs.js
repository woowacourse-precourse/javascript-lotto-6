import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class Inputs {
  async inputPrice() {
    try {
      const PRICE = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
      return this.validPrice(PRICE);
    } catch (error) {
      Console.print(error.message);
      return this.inputPrice();
    }
  }

  validPrice(PRICE) {
    const NUMERIC_PRICE = Number(PRICE);
    if (
      !(NUMERIC_PRICE % 1000 === 0) ||
      isNaN(NUMERIC_PRICE) ||
      !NUMERIC_PRICE
    ) {
      throw new Error("[ERROR] 1,000원 단위의 숫자를 입력해주세요.");
    }

    if (NUMERIC_PRICE < 1000) {
      throw new Error("[ERROR] 최소 구매 금액은 1,000원입니다.");
    }
    return NUMERIC_PRICE;
  }

  async inputWinningNumbers() {
    try {
      const WINNING_NUMBERS = await Console.readLineAsync(
        "당첨 번호를 입력해 주세요.\n"
      );
      const WINNING_LOTTO = new Lotto(WINNING_NUMBERS.split(",").map(Number));
      return WINNING_LOTTO;
    } catch (error) {
      Console.print(error.message);
      return this.inputWinningNumbers();
    }
  }

  async inputBonusNumber(WINNING_LOTTO) {
    try {
      const BONUS_NUMBER = await Console.readLineAsync(
        "보너스 번호를 입력해 주세요.\n"
      );
      return this.validBonusNumber(BONUS_NUMBER, WINNING_LOTTO.getNumbers());
    } catch (error) {
      Console.print(error.message);
      return this.inputBonusNumber();
    }
  }

  validBonusNumber(BONUS_NUMBER, WINNING_LOTTO) {
    const NUMERIC_BONUS_NUMBER = Number(BONUS_NUMBER);
    if (
      isNaN(NUMERIC_BONUS_NUMBER) ||
      !Number.isInteger(NUMERIC_BONUS_NUMBER) ||
      !NUMERIC_BONUS_NUMBER ||
      NUMERIC_BONUS_NUMBER <= 0 ||
      NUMERIC_BONUS_NUMBER > 45
    ) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 정수여야 합니다.");
    }

    if (WINNING_LOTTO.includes(NUMERIC_BONUS_NUMBER)) {
      throw new Error(
        "[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다."
      );
    }
    return NUMERIC_BONUS_NUMBER;
  }
}

export default Inputs;
