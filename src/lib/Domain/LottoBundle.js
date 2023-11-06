// domain
import Lotto from "../../Lotto.js";
// validator
import DomainValidator from "../Validator/DomainValidator.js";
// utils
import { Random } from "@woowacourse/mission-utils";
// constants
import { GAME_RULE } from "../Constants.js";

class LottoBundle {
  // Lotto 클래스의 'numbers'를 프라이빗으로 유지하기 위해 생성된 랜덤값을 별도 보관
  // 두 필드 모두 불변성만을 목적으로 함
  #items;
  #purchaseHistory;

  constructor(money) {
    this.#validate(money);
    this.#items = [];
    this.#purchaseHistory = [];
    const quantity = parseInt(money / GAME_RULE.TICKET_PRICE);
    Array.from({ length: quantity }).forEach(() => {
      const numbers = this.#pickLotto();
      this.#items.push(new Lotto(numbers));
      this.#purchaseHistory.push(numbers);
    });
  }

  #validate(money) {
    DomainValidator.ticketMoney(money);
  }

  #pickLotto() {
    const [min, max, size] = [
      GAME_RULE.MIN_WIN_NUMBER_INCLUSIVE,
      GAME_RULE.MAX_WIN_NUMBER_INCLUSIVE,
      GAME_RULE.WIN_NUMBERS_SIZE,
    ];
    const ticket = Random.pickUniqueNumbersInRange(min, max, size);
    return ticket.sort((a, b) => a - b);
  }

  get items() {
    return this.#items;
  }

  get purchaseHistory() {
    return this.#purchaseHistory;
  }
}

export default LottoBundle;
