import IO from "./IO.js";
import Validation from "./Validation.js";

class LottoGame {
  async start() {
    const amount = await IO.receiveUserInput('구입금액을 입력해 주세요.\n');
    Validation.isNumber(amount);
  }
}

export default LottoGame;