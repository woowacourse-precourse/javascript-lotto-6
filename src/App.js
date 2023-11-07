import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    //구입 금액 입력받기
    MissionUtils.Console.print("구입금액을 입력해 주세요.");
    const totalCost = await MissionUtils.Console.readLineAsync("");
    MissionUtils.Console.print("구입금액을 입력해 주세요.");

    //구입 금액 예외 처리 - 1) 숫자가 아닐 때
    if (Number.isNaN(totalCost) === true) {
      throw new Error("[ERROR] 숫자를 입력해야 합니다.");
    }

    //구입 금액 예외 처리 - 2) 1000원 단위가 아닐 때
    if (Number(totalCost) % 1000 !== 0) {
      throw new Error("[ERROR] 1000원 단위 금액을 입력해야 합니다.");
    }
  }
}

export default App;
