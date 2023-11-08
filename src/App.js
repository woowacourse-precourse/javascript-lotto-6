import Lotto from "./Lotto";
import { MissionUtils } from "@woowacourse/mission-utils";


class App {
  async play() {
    const count = await this.getMoneyReturnCount();
    console.log("count", count);
  }

  async getMoneyReturnCount() {
    const money = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
    if(money%1000 !== 0) throw new Error("[ERROR] 1000원 단위로 입력해 주세요.");
    return money/1000;
  }
  
}

export default App;
