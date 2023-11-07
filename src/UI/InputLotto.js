import { MissionUtils } from "@woowacourse/mission-utils";

class InputLotto {
  async lotto() {
    const LOTTO_NUMBER = await MissionUtils.Console.readLineAsync(
      "당첨 번호를 입력해 주세요.\n"
    );
    const LOTTO_NUMBER_ARRAY = LOTTO_NUMBER.split(",").map(Number);
    return LOTTO_NUMBER_ARRAY;
  }
}

export default InputLotto;
