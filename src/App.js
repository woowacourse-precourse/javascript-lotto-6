//import { MissionUtils } from "@woowacourse/mission-utils";
import * as MissionUtils from "@woowacourse/mission-utils";
class App {
  async play() {
    let price = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
    
    MissionUtils.Console.print("\n" + price/1000 + "개를 구매했습니다.");
  }
}

export default App;
