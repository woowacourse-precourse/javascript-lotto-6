import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async payAmount() {
    const amount = await MissionUtils.Console.readLineAsync(
      "구입금액을 입력해 주세요."
    );
    // TODO: 숫자인지 확인
    return amount;
  }
  async play() {}
}

export default App;
