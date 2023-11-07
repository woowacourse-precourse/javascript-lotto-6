import { MissionUtils } from "@woowacourse/mission-utils";
import Lottos from './Lottos.js'

class App {
  async play() {
    await this.userInputMoney();
  }

  async userInputMoney() {
    try {
      const userValue = await MissionUtils.Console.readLineAsync("구입금액을 입력해주세요.\n")
      this.lottos = new Lottos(userValue)
    } catch(e) {
      MissionUtils.Console.print(e.message)
      await this.userInputMoney()
      return;
    } 
    this.lottos.printCount();

  }

}

export default App;
