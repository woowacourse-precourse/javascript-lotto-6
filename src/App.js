import {INPUT_MONEY} from "./InputMoney.js";
import MY_LOTTO from "./MyLotto.js";
import OUT_MY_LOTTO_ARR from "./OutMyLotto.js";
import INPUT_ANSWER from "./InputAnswer.js";
import INPUT_BONUS from "./InputBonus.js";
import Lotto from "./Lotto.js";
import Lottory from "./Lottory.js";
import {MissionUtils} from "@woowacourse/mission-utils";
import OUT_RESULT from "./OutResult.js";

class App {
  async play() {
    try{
      const MONEY = (await INPUT_MONEY())/1000;
      const LOTTO_ARR = MY_LOTTO(MONEY);
      OUT_MY_LOTTO_ARR(MONEY,LOTTO_ARR);
      const ANSWER = new Lotto(await INPUT_ANSWER());
      const BONUS_NUM = await INPUT_BONUS();
      const MY_ANSWER = new Lottory(LOTTO_ARR, ANSWER.getNumbers(), BONUS_NUM);
      OUT_RESULT(MY_ANSWER.getAnswer(), MY_ANSWER.getEarning());
    }catch (e) {
      MissionUtils.Console.print("[ERROR]");
    }


  }
}

export default App;
