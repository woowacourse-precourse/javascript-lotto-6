import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const purchaseCost = await MissionUtils.Console.readLineAsync(
      "구입 금액을 입력해 주세요. \n"
    );

    console.log(Number.isInteger(purchaseCost / 1000));

    if (Number.isInterger(purchaseCost / 1000) === false) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위로 입력 가능합니다.");
    }
  }
}

export default App;
