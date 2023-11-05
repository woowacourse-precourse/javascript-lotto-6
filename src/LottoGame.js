import IO from "./IO.js";
import Validation from "./Validation.js";

class LottoGame {
  async start() {
    const amountStr = await IO.receiveUserInput('구입금액을 입력해 주세요.\n');
    Validation.isNumber(amountStr);

    const amount = Number(amountStr);
    Validation.isDivisible(amount);
  }
}

export default LottoGame;