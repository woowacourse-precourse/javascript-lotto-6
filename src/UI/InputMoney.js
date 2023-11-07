import { MissionUtils } from "@woowacourse/mission-utils";

class InputMoney {
  async inputMoney() {
    const MONEY = await MissionUtils.Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );
    return Math.floor(MONEY / 1000);
  }
}
export default InputMoney;
