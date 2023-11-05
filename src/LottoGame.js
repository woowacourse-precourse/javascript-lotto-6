import { Random } from "@woowacourse/mission-utils";
import IO from "./IO.js";
import Validation from "./Validation.js";
import Lotto from "./Lotto.js";

class LottoGame {
  #lottos;

  constructor() {
    this.#lottos = [];
  }

  async start() {
    const amountStr = await IO.receiveUserInput('구입금액을 입력해 주세요.\n');
    Validation.isNumber(amountStr, '[ERROR] 구입 금액은 0으로 시작하지 않는 숫자 형식입니다.');

    const amount = Number(amountStr);
    Validation.isDivisible(amount);

    const lottoNum = this.calculateLottomNum(amount);
    IO.printMsg(`\n${lottoNum}개를 구매했습니다.`);

    for(let i = 0; i < lottoNum; i++){
      const tempLotto = new Lotto(this.pickLottoNums());
      this.#lottos.push(tempLotto);
      IO.printMsg(tempLotto.formatNumbers());
    }

    const winningStr = await IO.receiveUserInput('\n당첨 번호를 입력해 주세요.\n');
    const winningArr = winningStr.split(',');
    Validation.isValidLen(winningArr);
  }

  calculateLottomNum(amount) {
    return amount / 1000;
  }

  pickLottoNums() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

export default LottoGame;