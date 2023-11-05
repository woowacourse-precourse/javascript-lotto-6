import Lotto from "./Lotto.js";
import {MissionUtils} from "@woowacourse/mission-utils";
class App {
  async play() {
    const MONEY= await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.")
    const INPUT_NUMBERS = await MissionUtils.Console.readLineAsync("당첨 번호를 입력해 주세요.")
    const LOTTO_NUMBERS=new Lotto(INPUT_NUMBERS);




  }
}

export default App;
