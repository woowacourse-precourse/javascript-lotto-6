import InputPrompter from "./InputPrompter.js";
import Lotto from "./Lotto.js";

class BonusNumberInput {
  #winningLotto;

  constructor(winningNumber) {
    this.#winningLotto = new Lotto(winningNumber);
  }

  async collect() {
    return this.createBonusNumberInputPrompter().collect();
  }

  createBonusNumberInputPrompter() {
    return new InputPrompter("\n보너스 번호를 입력해 주세요.", (strNum) => {
      if (this.#winningLotto.has(Number(strNum)))
        throw new Error(
          "[ERROR] 보너스 번호는 로또번호와 중복되지 않아야합니다."
        );
    });
  }
}

export default BonusNumberInput;
