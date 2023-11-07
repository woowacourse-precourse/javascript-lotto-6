import { MissionUtils } from "@woowacourse/mission-utils";
import Lottos from './Lottos.js'

class App {
  async play() {
    await this.userInputMoney();
  }

  async userInputMoney() {
    const userValue = await MissionUtils.Console.readLineAsync("구입금액을 입력해주세요.\n")
    this.lottos = new Lottos(userValue)
    console.log(this.lottos)
  }

}

export default App;
