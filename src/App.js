import { MissionUtils } from "@woowacourse/mission-utils";
// import Lotto from "./Lotto";

class App {
  async play() {
    const purchaseCost = await MissionUtils.Console.readLineAsync(
      "구입 금액을 입력해 주세요. \n"
    );

    const numberOfLotto = purchaseCost / 1000;

    if (purchaseCost % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위로 입력 가능합니다.");
    }
  }
}

export default App;
