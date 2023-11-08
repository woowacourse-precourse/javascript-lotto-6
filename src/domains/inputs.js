import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../constants/message.js";

const inputs = {
  // 구입 금액 입력
  async inputPrice() {
    const price = await Console.readLineAsync(MESSAGE.input.price);
    return price;
  },
  // 당첨 번호 입력
  async inputWinningNum() {
    const winningNum = await Console.readLineAsync(MESSAGE.input.winningNum);
    return winningNum;
  },
  // 보너스 번호 입력
  async inpustBonusNum() {
    const bonusNum = await Console.readLineAsync(MESSAGE.input.bonusNum);
    return bonusNum;
  },
};

export default inputs;
