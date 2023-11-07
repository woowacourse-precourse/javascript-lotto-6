import { Random } from "@woowacourse/mission-utils";
import { ConsoleInput } from "./ConsoleInput.js";
import { ConsoleOutput } from "./ConsoleOutput.js";
import Lotto from "./Lotto.js";
import { validateLottoPrice } from "./validation/validation.js";
import { LOTTO_RULES } from "./constants/constants.js";

class LottoPlay {
  async startGame() {
    // 로또 금액 입력 함수
    await this.inputLottoPrice();
    await this.inputLottoResult();
    await this.inputBonus();
  }

  async inputLottoPrice() {
    let lottoPrice = await ConsoleInput.inputLottoPrice();
    // 1000 단위 검사, 1000부터 입력 가능
    validateLottoPrice(lottoPrice);
    const price = lottoPrice / LOTTO_RULES.PRICE;
    await ConsoleOutput.lottoPurchasedMessage(price);
    await this.generateLotto(price);
  }

  async generateLotto(quantity) {
    for (let i = 0; i < quantity; i++) {
      let generate = await Random.pickUniqueNumbersInRange(
        LOTTO_RULES.START,
        LOTTO_RULES.END,
        LOTTO_RULES.LENGTH
      );
      generate.sort((a, b) => a - b);
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

  async inputBonus() {
    await ConsoleInput.inputBonusNumber();
  }
}
export default LottoPlay;
