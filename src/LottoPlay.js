import { Random } from "@woowacourse/mission-utils";
import { ConsoleInput } from "./ConsoleInput.js";
import { ConsoleOutput } from "./ConsoleOutput.js";
import Lotto from "./Lotto.js";
import { validateLottoPrice } from "./validation/validation.js";

class LottoPlay {
  async startGame() {
    // 로또 금액 입력 함수
    await this.inputLottoPrice();
    await this.inputLottoResult();
  }

  async inputLottoPrice() {
    let lottoPrice = await ConsoleInput.inputLottoPrice();
    // 1000 단위 검사, 1000부터 입력 가능
    validateLottoPrice(lottoPrice);
    const price = lottoPrice / 1000;
    await ConsoleOutput.lottoPurchasedMessage(price);
    await this.generateLotto(price);
  }

  async generateLotto(quantity) {
    for (let i = 0; i < quantity; i++) {
      const generate = await Random.pickUniqueNumbersInRange(1, 45, 6);
      const stringifyNums = `[${generate.join(", ")}]`;
      await ConsoleOutput.generatedLotto(stringifyNums);
    }
  }

  async inputLottoResult() {
    const result = await ConsoleInput.inputLottoResult();
    // NaN, 범위, 중복 검사
    new Lotto(result);
    await ConsoleOutput.lottoNumberList(result);
  }
}
export default LottoPlay;
