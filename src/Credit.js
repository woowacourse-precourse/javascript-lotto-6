import { Console } from "@woowacourse/mission-utils";

class Credit {
  #amountOfLotto;
  constructor() {
    this.#amountOfLotto = 0;
  }
  async getCredit() {
    const cash = Console.readLineAsync("구입금액을 입력해 주세요.\n");
    return cash;
  }

  getAmountOfLotto(credit) {
    this.#amountOfLotto = this.isDividedBy1000(credit);
    return this.#amountOfLotto;
  }

  isDividedBy1000(credit) {
    if (credit % 1000 !== 0) {
      throw new Error("[ERROR] 1000원 단위로 입력해주세요.");
    } else {
      return Math.floor(credit / 1000);
    }
  }

  printAmountOfLotto(amount) {
    const amountOfLotto = amount;
    Console.print(`${amountOfLotto}개를 구매했습니다.`);
  }
}

export default Credit;
