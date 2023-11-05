import { Random } from "@woowacourse/mission-utils";
import { Console } from "@woowacourse/mission-utils";
import { INPUT, OUTPUT, ERROR, OPTION } from "./Constants/Constants.js";
import Validation from "./Validation/Validation.js";

class LottoData {
  #lottoData;
  #lottoCount;

  constructor() {
    this.#lottoData = [];
    this.#lottoCount = 0;
  }

  async inputPurchaseAmount() {
    const input = await Console.readLineAsync(INPUT.purchase_amount);
    const purchaseAmount = Number(input);
    try {
      Validation.isValidPurchaseAmount(purchaseAmount);
      this.#lottoCount = purchaseAmount / 1000;
    } catch {
      Console.print(ERROR.purchase_amount_error);
      await this.inputPurchaseAmount();
    }
  }

  pickRandomLotto() {
    const pick = Random.pickUniqueNumbersInRange(
      OPTION.min_random_num,
      OPTION.max_random_num,
      OPTION.lotto_num_count
    );
    pick.sort((a, b) => a - b);
    return pick;
  }

  iterRandomLottoAndSave() {
    Array.from({ length: this.#lottoCount }).forEach(() => {
      const pick = this.pickRandomLotto();
      this.printLottoData(pick);
      this.#lottoData.push(pick);
    });
  }

  getLottoData() {
    return this.#lottoData;
  }

  getLottoPurchaseAmount() {
    return this.#lottoCount * 1000;
  }

  printLottoData(lottoData) {
    Console.print(`[${lottoData.join(", ")}]`);
  }

  printLottoCount() {
    Console.print("\n" + this.#lottoCount + OUTPUT.how_many_purchased);
  }
}

export default LottoData;
