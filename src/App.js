import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    MissionUtils.Console.print("구입금액을 입력해 주세요.");
    const price = await MissionUtils.Console.readLineAsync();
    check_number(price);
    if (parseInt(price) % 1000 != 0) {
      throw new Error("[ERROR] 천원 단위로 입력해 주세요");
    }

    function check_number(input) {
      if (isNaN(input)) {
        throw new Error("[ERROR] 숫자를 입력해주세요");
      }
    }
  }
}

export default App;
