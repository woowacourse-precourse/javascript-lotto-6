import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print("구입금액을 입력해 주세요.");
    let purchaseAmount = await Console.readLineAsync("");
    if (isNaN(purchaseAmount)) {
      throw new Error("[ERROR] 숫자만 입력할 수 있습니다.");
    }
    purchaseAmount = parseInt(purchaseAmount);
    if (purchaseAmount < 1000) {
      throw new Error("[ERROR] 최소 구매금액은 1000원입니다.");
    }
  }
}

export default App;
