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
    this.#amountOfLotto = Math.floor(credit / 1000);
    return this.#amountOfLotto;
  }

  printAmountOfLotto(amount) {
    const amountOfLotto = amount;
    Console.print(`${amountOfLotto}개를 구매했습니다.`);
  }
}

export default Credit;
