import {INPUT_MONEY} from "./ui/InputMoney.js";
import OUT_MY_LOTTO_ARR from "./ui/OutMyLotto.js";
import INPUT_ANSWER from "./ui/InputAnswer.js";
import INPUT_BONUS from "./ui/InputBonus.js";
import Lotto from "./domain/Lotto.js";
import MyLottos from "./domain/MyLottos.js";
import {MissionUtils} from "@woowacourse/mission-utils";
import OUT_RESULT from "./ui/OutResult.js";

class App {
    async play() {
        try {
            const MONEY = await INPUT_MONEY();
            const MYLOTTOS = new MyLottos(MONEY);

            OUT_MY_LOTTO_ARR(MYLOTTOS.getCoin(), MYLOTTOS.getMyLottos());
            const ANSWER = new Lotto(await INPUT_ANSWER());
            MYLOTTOS.setAnswer(ANSWER.getNumbers());

            const BONUS_NUM = await INPUT_BONUS();
            MYLOTTOS.setBonus(BONUS_NUM);
            MYLOTTOS.count();

            OUT_RESULT(MYLOTTOS.getAnswer(), MYLOTTOS.getEarning());

        } catch (e) {
            MissionUtils.Console.print("[ERROR]");
        }


    }
}

export default App;
