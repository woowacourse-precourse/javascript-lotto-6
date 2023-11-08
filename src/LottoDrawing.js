import { Console } from "@woowacourse/mission-utils";

import Lotto from "./Lotto.js";

class LottoDrawing {
  #winnigLotto;
  #bonusNumber;
  async inputWinningLotto() {
    try {
      const input = await Console.readLineAsync(
        "\n당첨 번호를 입력해 주세요.\n"
      );
  }
}

export default LottoDrawing;
