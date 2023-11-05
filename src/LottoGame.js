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
    winningArr.forEach(el => Validation.isNumber(el, '[ERROR] 당첨 번호는 \,으로 구분되는 6개의 숫자 형식입니다.'));
    winningArr.forEach(el => Validation.isValidLottoNum(el));

    const bonusStr = await IO.receiveUserInput('\n보너스 번호를 입력해 주세요.\n');
    Validation.isNumber(bonusStr, '[ERROR] 보너스 번호는 하나의 숫자 형식입니다.');
    
    const bonusNum = Number(bonusStr);
    Validation.isValidLottoNum(bonusNum);
  }

  calculateLottomNum(amount) {
    return amount / 1000;
  }

  pickLottoNums() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

export default LottoGame;