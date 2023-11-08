import { Console } from "@woowacourse/mission-utils";

import Lotto from "./Lotto.js";

class LottoDrawing {
  #winnigLotto;
  #bonusNumber;

  getWinningLotto() {
    return this.#winnigLotto;
  }

  setWinningLotto(lotto) {
    this.#winnigLotto = lotto;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  async inputWinningLotto() {
    try {
      const input = await Console.readLineAsync(
        "\n당첨 번호를 입력해 주세요.\n"
      );

      console.log(input);

      const lotto = new Lotto(input.split(",").map(Number));
      this.setWinningLotto(lotto);
    } catch (error) {
      Console.print(error.message);

      return this.inputWinningLotto();
    }
  }

  async inputBonusNumber() {
    try {
      const input = await Console.readLineAsync(
        "\n보너스 번호를 입력해 주세요.\n"
      );

      this.vaildateBonusNumber(input);
      this.#bonusNumber = Number(input);
    } catch (error) {
      Console.print(error.message);

      return this.inputBonusNumber();
    }
  }

  vaildateBonusNumber(input) {
    if (isNaN(input)) throw new Error("[ERROR] 숫자만 입력 가능합니다.");

    const number = Number(input);
    if (!Number.isInteger(number))
      throw new Error("[ERROR] 정수만 입력 가능합니다.");
    if (number < 1 || number > 45)
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    if (this.#winnigLotto.getNumbers().includes(number))
      throw new Error("[ERROR] 보너스 번호는 당첨 번호에 포함될 수 없습니다.");
  }
}

export default LottoDrawing;
