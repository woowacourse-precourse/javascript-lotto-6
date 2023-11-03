import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Validator from "./Validate.js";

class WinLotto {
  constructor(winningNumbers, bonusNumber) {
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
  }

  static #WINNINGNUM_INPUT = "당첨 번호를 입력해 주세요.\n";
  static #BONUSNUM_INPUT = "보너스 번호를 입력해 주세요.\n";
}
export default WinLotto;
