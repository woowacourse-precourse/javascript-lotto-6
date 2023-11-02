import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const enterCost = await MissionUtils.Console.readLineAsync(
      "구입 금액을 입력해 주세요. \n"
    );
  }
}

export default App;
