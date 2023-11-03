import { MissionUtils } from "@woowacourse/mission-utils";

const InputView = {
  async getUserPurchaseAmout() {
    try {
      const userPurchaseAmout = await MissionUtils.Console.readLineAsync(
        "구입 금액을 입력해주세요.\n",
      );
      return userPurchaseAmout;
    } catch (e) {
      throw new Error("[ERROR]");
    }
  },
};

export default InputView;
