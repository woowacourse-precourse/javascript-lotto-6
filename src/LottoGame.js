import { Console } from "@woowacourse/mission-utils";

class LottoGame {
  #gameCount;

  constructor() {
    this.#gameCount = 0;
  }

  async getUserInputMoney() {
    const userInputMoney = await Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );
    if (userInputMoney % 1000 !== 0) {
      throw new Error(
        "[ERROR] 로또 구입 가격은 1000원 단위로 입력해야 합니다."
      );
    }

    this.#gameCount = userInputMoney / 1000;
    Console.print(`총 ${this.#gameCount}개를 구매했습니다.\n`);
  }
}

export default LottoGame;
