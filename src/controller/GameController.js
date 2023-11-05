import MyLottos from "../domain/MyLottos.js";
import OUT_MY_LOTTO_ARR from "../ui/OutMyLotto.js";
import Lotto from "../domain/Lotto.js";
import OUT_RESULT from "../ui/OutResult.js";
import inputView from "../ui/InputView.js";

const gameController = async () => {
    const MONEY = await inputView.INPUT_MONEY();
    const MYLOTTOS = new MyLottos(MONEY);

    OUT_MY_LOTTO_ARR(MYLOTTOS.getCoin(), MYLOTTOS.getMyLottos());
    const ANSWER = new Lotto(await inputView.INPUT_ANSWER());
    MYLOTTOS.setAnswer(ANSWER.getNumbers());

    const BONUS_NUM = await inputView.INPUT_BONUS();
    MYLOTTOS.setBonus(BONUS_NUM);
    MYLOTTOS.count();

    OUT_RESULT(MYLOTTOS.getResult(), MYLOTTOS.getEarning());
}
export default gameController;