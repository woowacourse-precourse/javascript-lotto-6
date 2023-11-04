import {INPUT_MONEY} from "./InputMoney.js";
import MY_LOTTO from "./MyLotto.js";
import OUT_MY_LOTTO_ARR from "./OutMyLotto.js";
import INPUT_ANSWER from "./InputAnswer.js";
import INPUT_BONUS from "./InputBonus.js";

class App {
  async play() {
    const MONEY = (await INPUT_MONEY())/1000;
    const LOTTO_ARR = MY_LOTTO(MONEY);
    OUT_MY_LOTTO_ARR(MONEY,LOTTO_ARR);
    const ANSWER_ARR = await INPUT_ANSWER();
    const BONUS_NUM = await INPUT_BONUS();
  }
}

export default App;
