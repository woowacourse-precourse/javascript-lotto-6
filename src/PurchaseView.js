import { MissionUtils } from "@woowacourse/mission-utils";

class PurchaseView {
  static printPriceQuestion() {
    const MESSAGE = "구입금액을 입력해 주세요.";
    MissionUtils.Console.print(MESSAGE);
  }
}

export default PurchaseView;
