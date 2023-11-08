import { Console, Random } from "@woowacourse/mission-utils";

import Lotto from "../Lotto.js";
import { validateBonusNum, validateLottoPrice } from "../utility/validation.js";
import { LOTTO_RULES } from "../constants/constants.js";
import { calculateProfit, findMatchingNums } from "../utility/results.js";
import ConsoleInput from "../view/ConsoleInput.js";
import ConsoleOutput from "../view/ConsoleOutput.js";
class LottoPlay {
  #lottoPrice;
  #result;
  #generatedNums;

  #input = new ConsoleInput();
  #output = new ConsoleOutput();

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
    this.#output.print("당첨 통계");
    this.#output.print("---");
    findMatchingNums(this.lottos, this.#result, bonusNum);
    const profitMsg = calculateProfit(this.#lottoPrice);
    this.#output.print(`총 수익률은 ${profitMsg}%입니다.`);
  }

  async inputLottoPrice() {
    // 1000 단위 검사, 1000부터 입력 가능

    while (true) {
      try {
        this.#lottoPrice = Number(await this.#input.inputLottoPrice());
        validateLottoPrice(this.#lottoPrice);
        const price = this.#lottoPrice / LOTTO_RULES.PRICE;
        await this.#output.lottoPurchasedMessage(price);
        await this.generateLotto(price);
        return this.#lottoPrice;
      } catch (error) {
        this.#output.print("[ERROR]");
      }
    }
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
      await this.#output.generatedLotto(stringifyNums);
    }
  }

  async inputLottoResult() {
    while (true) {
      try {
        this.#result = await this.#input.inputLottoResult();
        // NaN, 범위, 중복 검사
        new Lotto(this.#result);
        await this.#output.lottoNumberList(this.#result);
        return this.#result;
      } catch (error) {}
      this.#output.print("[ERROR]");
    }
  }

  async inputBonus() {
    while (true) {
      try {
        const bonus = await this.#input.inputBonusNumber();
        validateBonusNum(bonus, this.#result);
        return bonus;
      } catch (error) {
        this.#output.print("[ERROR]");
      }
    }
  }
}
export default LottoPlay;
