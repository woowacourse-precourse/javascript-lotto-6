import { MissionUtils } from "@woowacourse/mission-utils";
import Lottos from './Lottos.js'
import Winning from "./WinningNumber.js";
import Bonus from "./BonusNumber.js";

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
    this.lottos.printLottoList();
    await this.userInputLottoNumber();
  }

  async userInputLottoNumber() {
    try {
      const inputLottoNumber = await MissionUtils.Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
      let userLottoNumber = inputLottoNumber.split(',');
      let newUserLottoNumber = userLottoNumber.map(Number)
      this.winning = new Winning(newUserLottoNumber)
      console.log(this.winning.value)
    } catch(e) {
      MissionUtils.Console.print(e.message)
      await this.userInputLottoNumber();
      return;
    }
  }

}

export default App;
