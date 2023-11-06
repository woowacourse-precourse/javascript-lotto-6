import { Console } from "@woowacourse/mission-utils";

class Store {
  #money;

  constructor() {
    this.#money = 0;
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
        Console.print(error);
      }
    }
  }
}

export default Store;
