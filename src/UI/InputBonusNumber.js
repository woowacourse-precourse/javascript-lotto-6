import { MissionUtils } from "@woowacourse/mission-utils";
import BonusNumberValidity from "../Domain/BonusNumberValidity.js";

class InputBonusNumber {
  async bonusNumber(lottoNumberArray) {
    const BONUS_NUMBER_VALIDITY = new BonusNumberValidity();
    const BONUS = await MissionUtils.Console.readLineAsync(
      "보너스 번호를 입력해 주세요.\n"
    );
    const BONUS_NUMBER = Number(BONUS);
    try {
      BONUS_NUMBER_VALIDITY.inputNumberValidity(BONUS_NUMBER, lottoNumberArray);
    } catch (e) {
      MissionUtils.Console.print(e.message);
      return this.bonusNumber(lottoNumberArray);
    }
    return BONUS_NUMBER;
  }
}

export default InputBonusNumber;
