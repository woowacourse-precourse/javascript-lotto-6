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
    const quantity = parseInt(money / GAME_RULE.LOTTO_PRICE);
    this.#purchaseLotto(quantity);
  }

  #validate(money) {
    DomainValidator.lottoMoney(money);
  }

  #purchaseLotto(length) {
    Array.from({ length }).forEach(() => {
      const numbers = this.#pickLotto();
      this.#items.push(new Lotto(numbers));
      this.#purchaseHistory.push(numbers);
    });
  }

  #pickLotto() {
    const [min, max, size] = [
      GAME_RULE.MIN_WIN_NUMBER_INCLUSIVE,
      GAME_RULE.MAX_WIN_NUMBER_INCLUSIVE,
      GAME_RULE.WIN_NUMBERS_SIZE,
    ];
    const lottoNumbers = Random.pickUniqueNumbersInRange(min, max, size);
    return lottoNumbers.sort((a, b) => a - b);
  }

  get items() {
    return this.#items;
  }

  get purchaseHistory() {
    return this.#purchaseHistory;
  }
}

export default LottoBundle;
