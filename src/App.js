import { inputAmount } from "./input/InputAmount.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { isValidAmount } from "./utils/vaildator.js";
import { printLottoCount } from "./view/LottoCount.js";
import Lotto from "./Lotto.js";
import { printLottoNum } from "./view/LottoNum.js";
import { inputBonnusNum, inputWinningNum } from "./input/InputWinningNum.js";

class App {
  async play() {
    const amount = await inputAmount();
    isValidAmount(amount);

    const count = printLottoCount(amount);
    const lottoNums = printLottoNum(count);

    const lottos = lottoNums.map(lotto => new Lotto(lotto));

    const winningNums = await inputWinningNum();

    const bonusNum = await inputBonnusNum();

  }
}

export default App;

const app = new App();
app.play();