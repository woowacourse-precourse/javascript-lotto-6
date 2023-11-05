import IO from "./IO.js";

class LottoGame {
  async start() {
    const amount = await IO.receiveUserInput('구입금액을 입력해 주세요.\n');
  }
}

export default LottoGame;