import { MissionUtils } from "@woowacourse/mission-utils";

class InputBonusNumber {
  async bonusNumber() {
    const BONUS = await MissionUtils.Console.readLineAsync(
      "보너스 번호를 입력해 주세요.\n"
    );
    const BONUS_NUMBER = Number(BONUS);

    return BONUS_NUMBER;
  }
}

export default InputBonusNumber;
