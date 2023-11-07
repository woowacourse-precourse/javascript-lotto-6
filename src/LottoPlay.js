import { Random } from "@woowacourse/mission-utils";
import { ConsoleInput } from "./ConsoleInput.js";
import { ConsoleOutput } from "./ConsoleOutput.js";
import Lotto from "./Lotto.js";
import { validateLottoPrice } from "./utility/validation.js";
import { LOTTO_RULES } from "./constants/constants.js";
import { findMatchingNums } from "./utility/results.js";

class LottoPlay {
  #lottoPrice;
  #result;
  #generatedNums;

  constructor(result, generated) {
    this.#lottoPrice = 0;
    this.#result = result;
    this.#generatedNums = generated;
    this.lottos = [];
  }
  async startGame() {
    // 로또 금액 입력 함수
    await this.inputLottoPrice();
    await this.inputLottoResult();
    const bonusNum = await this.inputBonus();

    //   로또 번호에 중복된 숫자가 있는지 체크하는 유효성 검사 함수
    findMatchingNums(this.lottos, this.#result);
    // console.log(this.lottos);
  }

  async inputLottoPrice() {
    this.#lottoPrice = await ConsoleInput.inputLottoPrice();
    // 1000 단위 검사, 1000부터 입력 가능
    validateLottoPrice(this.#lottoPrice);
    const price = this.#lottoPrice / LOTTO_RULES.PRICE;
    await ConsoleOutput.lottoPurchasedMessage(price);
    await this.generateLotto(price);
  }

  async generateLotto(quantity) {
    for (let i = 0; i < quantity; i++) {
      this.#generatedNums = await Random.pickUniqueNumbersInRange(
        LOTTO_RULES.START,
        LOTTO_RULES.END,
        LOTTO_RULES.LENGTH
      );
      const lottos = this.#generatedNums.sort((a, b) => a - b);
      this.lottos.push(lottos);
      const stringifyNums = `[${this.#generatedNums.join(", ")}]`;
      await ConsoleOutput.generatedLotto(stringifyNums);
    }
  }

  async inputLottoResult() {
    this.#result = await ConsoleInput.inputLottoResult();
    // NaN, 범위, 중복 검사
    new Lotto(this.#result);
    await ConsoleOutput.lottoNumberList(this.#result);
  }

  async inputBonus() {
    await ConsoleInput.inputBonusNumber();
  }
}
export default LottoPlay;
