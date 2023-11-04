import { Console, MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE, MESSAGE_INPUT } from "./constants/constant.js";

class App {
  async play() {
    // 보유 금액 입력 - 유효한지 확인하는 코드 추가하기
    const userMoney = await Console.readLineAsync(MESSAGE.START);
    const count = (userMoney / 1000);
    Console.print(MESSAGE_INPUT(count).COUNT);
    
    // 랜덤한 6개 번호를 count 개수만큼 출력
    let userRandomNums = [];
    for (let i=0; i < count; i++) {
      const randomNums = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      userRandomNums.push(randomNums);
      Console.print(randomNums);
    }
    // Console.print(userRandomNums)

  }
}

export default App;
