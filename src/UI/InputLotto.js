import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "../Domain/Lotto.js";

class InputLotto {
  async lotto() {
    const LOTTO_NUMBER = await MissionUtils.Console.readLineAsync(
      "당첨 번호를 입력해 주세요.\n"
    );
    const LOTTO_NUMBER_ARRAY = LOTTO_NUMBER.split(",").map(Number);
    try {
      new Lotto(LOTTO_NUMBER_ARRAY);
    } catch (e) {
      MissionUtils.Console.print(e.message);
      return this.lotto();
    }
    return LOTTO_NUMBER_ARRAY;
  }
}

export default InputLotto;
