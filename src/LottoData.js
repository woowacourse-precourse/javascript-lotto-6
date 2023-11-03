import { Random } from "@woowacourse/mission-utils";
import { Console } from "@woowacourse/mission-utils";
import { INPUT, OUTPUT, ERROR, OPTION } from "./Constants.js";

class LottoData {
  #lottoData;
  #lottoCount;

  constructor() {
    this.#lottoData = [];
    this.#lottoCount = 0;
  }

  #validate(purchaseAmount) {
    if (
      typeof purchaseAmount !== "number" ||
      isNaN(purchaseAmount) ||
      purchaseAmount <= 0 ||
      purchaseAmount % 1000 !== 0
    ) {
      throw new Error();
    }
  }

  async inputPurchaseAmount() {
    const input = await Console.readLineAsync(INPUT.purchase_amount);
    const purchaseAmount = Number(input);
    try {
      this.#validate(purchaseAmount);
      this.#lottoCount = purchaseAmount / 1000;
    } catch {
      Console.print(ERROR.purchase_amount_error);
      await this.inputPurchaseAmount();
    }
  }

  pickRandomLotto() {
    for (let i = 0; i < this.#lottoCount; i++) {
      const pick = Random.pickUniqueNumbersInRange(
        OPTION.min_random_num,
        OPTION.max_random_num,
        OPTION.lotto_num_count
      );
      pick.sort((a, b) => a - b);
      this.printLottoData(pick);
      this.#lottoData.push(pick);
    }
  }

  getLottoData() {
    return this.#lottoData;
  }

  getLottoCount() {
    return this.#lottoCount;
  }

  printLottoData(lottoData) {
    Console.print(`[${lottoData.join(", ")}]`);
  }

  printLottoCount() {
    Console.print("\n" + this.#lottoCount + OUTPUT.how_many_purchased);
  }
}

export default LottoData;
