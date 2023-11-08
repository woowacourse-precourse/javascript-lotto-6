import { Console } from "@woowacourse/mission-utils";
import { MESSAGE_INPUT } from "../constants/Constant";

class LottoInput {
  async priceInput() {
    const price = await Console.readLineAsync(MESSAGE_INPUT.PRICE);
    this.validPrice(Number(price));
    return Number(price);
  }

  validPrice(price) {
    if (price % 1000 !== 0)
      throw new Error("[ERROR] 구입 금액은 1,000원 단위로 입력해주세요.");
  }

  async winningInput() {
    let winningNum = [];
    const winNum = await Console.readLineAsync(MESSAGE_INPUT.WINNING_INPUT);
    winningNum = winNum.split(",").map(Number);
    return winningNum;
  }

  async bonusInput() {
    const bonusNum = await Console.readLineAsync(MESSAGE_INPUT.BONUS_INPUT);
    return Number(bonusNum);
  }
}

export default LottoInput;
