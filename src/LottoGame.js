import { Console } from "@woowacourse/mission-utils";

class LottoGame {
  #ticketCount;
  constructor() {
    this.#ticketCount;
  }

  start() {
    this.buyLotto();
  }

  setTicketCount(count) {
    this.#ticketCount = count;
  }

  async buyLotto() {
    const inputPrice = await Console.readLineAsync('구입 금액을 입력해 주세요.\n');

    const tempPrice = Number(inputPrice);
    this.#validateCost(tempPrice);
    this.setTicketCount(tempPrice/1000);
  }

  #validateCost(price) {
    if(price <= 0) {
      throw new Error("[ERROR] 구입 가능한 금액이 입력되지 않았습니다.")
    }
    if(isNaN(price)) {
      throw new Error("[ERROR] 구입 금액이 숫자가 아닙니다.")
    }
    if(!Number.isInteger(price)) {
      throw new Error("[ERROR] 구입 금액이 정수가 아닙니다.")
    }
    if(price%1000 !== 0) {
      throw new Error("[ERROR] 금액이 1,000원으로 나누어 떨어지지 않습니다.")
    }
  }
}

export default LottoGame;
