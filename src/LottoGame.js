import { Random } from "@woowacourse/mission-utils";
import IO from "./IO.js";
import Validation from "./Validation.js";

class LottoGame {
  async start() {
    const amountStr = await IO.receiveUserInput('구입금액을 입력해 주세요.\n');
    Validation.isNumber(amountStr);

    const amount = Number(amountStr);
    Validation.isDivisible(amount);

    const lottoNum = this.calculateLottomNum(amount);
    IO.printMsg(`\n${lottoNum}개를 구매했습니다.`);
  }

  calculateLottomNum(amount) {
    return amount / 1000;
  }

  pickLottoNums() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

export default LottoGame;