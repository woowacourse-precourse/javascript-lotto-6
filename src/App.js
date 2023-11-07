import { inputAmount } from "./input/InputAmount.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { isDuplicate, isNumberInRange, isSixLength, isValidAmount } from "./utils/vaildator.js";
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
    isDuplicate(winningNums) || isNumberInRange(winningNums) || isSixLength(winningNums);

    const bonusNum = await inputBonnusNum();
    winningNums.push(bonusNum);
    isDuplicate(winningNums);
    winningNums.pop();
  }
}

export default App;

const app = new App();
app.play();