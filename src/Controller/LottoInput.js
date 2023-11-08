import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE, MESSAGE_INPUT } from "../constants/Constant";
import ValidLotto from "./ValidLotto";

class LottoInput {
  constructor() {
    this.validLotto = new ValidLotto();
  }

  async priceInput() {
    try {
      const price = await Console.readLineAsync(MESSAGE_INPUT.PRICE);
      this.validLotto.validPrice(price);
      return Number(price);
    } catch (error) {
      Console.print(ERROR_MESSAGE.PRICE_UNIT);
      return this.priceInput();
    }
  }

  async winningInput() {
    try {
      let winningNum = [];
      const winNum = await Console.readLineAsync(MESSAGE_INPUT.WINNING_INPUT);
      winningNum = winNum.split(",").map(Number);

      this.validLotto.validLottoUnit(winningNum);
      return winningNum;
    } catch (error) {
      Console.print("[ERROR]");
      return this.winningInput();
    }
  }

  async bonusInput() {
    const bonusNum = await Console.readLineAsync(MESSAGE_INPUT.BONUS_INPUT);
    return Number(bonusNum);
  }
}

export default LottoInput;
