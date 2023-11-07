import { MissionUtils } from "@woowacourse/mission-utils";
import { Message } from "./constants/Message";
import { checkMoney } from "./Validation";

class App {
  async play() {
    const money = askMoney();
  }
}

const askMoney = async () => {
  let isPass = false;
  let money = 0;
  while (isPass) {
    try {
      money = await MissionUtils.Console.readLineAsync(Message.INIT);
      checkMoney(money);
      isPass = true;
    } catch {
      MissionUtils.Console.print(error.Message);
    }
  }
  return money;
};

export default App;
