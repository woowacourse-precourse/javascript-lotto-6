import { Console, MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE, MESSAGE_INPUT } from "./constants/constant.js";

class App {
  async play() {
    // 보유 금액 입력 - 유효한지 확인하는 코드 추가하기
    const userMoney = await Console.readLineAsync(MESSAGE.START);
    const count = (userMoney / 1000);
    Console.print(MESSAGE_INPUT(count).COUNT);

  }
}

export default App;
