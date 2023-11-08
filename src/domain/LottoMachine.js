import { Random } from "@woowacourse/mission-utils";
import { MIN_NUMBER, MAX_NUMBER, LOTTO_LENGTH } from "../utils/constants.js";
import { print } from "../utils/print.js";

class LottoMachine {
  generateLotto() {
    const RANDOM_NUMBER = Random.pickUniqueNumbersInRange(
      MIN_NUMBER,
      MAX_NUMBER,
      LOTTO_LENGTH
    );
    return RANDOM_NUMBER.sort((a, b) => a - b);
  }

  generateAllLottos(input) {
    const LOTTO_LIST = [];
    let count = 0;

    while (count < input) {
      const LOTTO = this.generateLotto();
      LOTTO_LIST.push(LOTTO);
      count++;
    }

    return LOTTO_LIST;
  }

  #printPurchaseQuantity(quantity) {
    print(`\n${quantity}개를 구매했습니다.`);
  }

  #printLottoNumber(lottos) {
    lottos.map((lotto) => print(`[${lotto.join(", ")}]`));
  }

  printLottos(quantity, lottos) {
    this.#printPurchaseQuantity(quantity);
    this.#printLottoNumber(lottos);
  }
}

export default LottoMachine;
