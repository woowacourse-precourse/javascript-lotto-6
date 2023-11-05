import MyLottos from "../domain/MyLottos.js";
import Lotto from "../domain/Lotto.js";
import inputView from "../ui/InputView.js";
import outputView from "../ui/OutputView.js";

const gameController = async () => {
    const MONEY = await inputView.INPUT_MONEY();
    const MYLOTTOS = new MyLottos(MONEY);

    outputView.PrintMyLotto(MYLOTTOS.getCoin(), MYLOTTOS.getMyLottos());
    const ANSWER = new Lotto(await inputView.INPUT_ANSWER());
    MYLOTTOS.setAnswer(ANSWER.getNumbers());

    const BONUS_NUM = await inputView.INPUT_BONUS();
    MYLOTTOS.setBonus(BONUS_NUM);
    MYLOTTOS.count();

    outputView.PrintMyScore(MYLOTTOS.getResult(), MYLOTTOS.getEarning());
}
export default gameController;