import { Console } from "@woowacourse/mission-utils";

import Lotto from "./Lotto.js";

class LottoDrawing {
  #winnigLotto;
  #bonusNumber;

  getWinningLotto() {
    return this.#winnigLotto;
  }
  async inputWinningLotto() {
    try {
      const input = await Console.readLineAsync(
        "\n당첨 번호를 입력해 주세요.\n"
      );

      const lotto = new Lotto(input.split(",").map(Number));
      this.#winnigLotto = lotto;
    } catch (error) {
      Console.print(error.message);

      return this.inputWinningLotto();
    }
  }
  }
}

export default LottoDrawing;
