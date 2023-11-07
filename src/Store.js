import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class Store {
  #money;
  #lottoList;

  constructor() {
    this.#money = 0;
    this.#lottoList = [];
  }

  static async inputMoney() {
    const money = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    // 예외 처리
    if (isNaN(money)) {
      throw new Error("[ERROR] 1,000원 단위의 숫자를 입력해주세요.");
    }
    if (money % 1000 !== 0) {
      throw new Error(
        "[ERROR] 올바르지 않은 금액입니다. 1,000원 단위로 입력해주세요."
      );
    }
    return money;
  }

  async receivePayment() {
    let isMoneyPaid = false;
    while (!isMoneyPaid) {
      try {
        this.#money = await Store.inputMoney();
        isMoneyPaid = true;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  calculateLottoAmount() {
    const lottoAmount = this.#money / 1000;
    Console.print(`${lottoAmount}개를 구매했습니다.`);
    return lottoAmount;
  }

  #printLottoList() {
    for (const lotto of this.#lottoList) {
      lotto.printNumbers();
    }
  }

  issueLotto() {
    const lottoAmount = this.calculateLottoAmount();
    for (let i = 0; i < lottoAmount; i++) {
      const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.#lottoList.push(new Lotto(lottoNumbers.sort((a, b) => a - b)));
    }
    this.#printLottoList();
  }

  static async inputWinningNumbers() {
    const money = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
  }
}

export default Store;
