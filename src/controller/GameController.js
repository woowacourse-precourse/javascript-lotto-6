import MyLottos from "../domain/MyLottos.js";
import Lotto from "../domain/Lotto.js";
import inputView from "../ui/InputView.js";
import outputView from "../ui/OutputView.js";
import ScoreMyLottos from "../domain/ScoreMyLottos.js";

const gameController = async () => {
    const MONEY = await inputView.INPUT_MONEY();
    const MYLOTTOS = new MyLottos(MONEY);

    outputView.PrintMyLotto(MYLOTTOS.getOutputString());

    const ANSWER = new Lotto(await inputView.INPUT_ANSWER());
    const BONUS_NUM = await inputView.INPUT_BONUS();

    const SCORE = new ScoreMyLottos(MYLOTTOS.getMyLottos(), ANSWER.getNumbers(), BONUS_NUM);

    outputView.PrintMyScore(SCORE.getResult(), SCORE.getEarning());
}
export default gameController;