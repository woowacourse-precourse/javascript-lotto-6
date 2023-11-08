import InputAmount from "./input/InputAmount.js";
import InputBonusNumber from "./input/InputBonusNumber.js";
import InputWinningNumber from "./input/InputWinningNumber.js";
import RandomNumber from "./RandomNumber.js";
import LottoCount from "./LottoCount.js";
import {
  printLottoNumbers,
  printReturnRate,
  printWinning,
} from "./PrintLog.js";
import CheckWinning from "./CheckWinning.js";
class App {
  async play() {
    const amount = await InputAmount();
    const count = LottoCount(amount);
    const lottoNumberList = RandomNumber(count);
    printLottoNumbers(lottoNumberList);
    const winningNumber = await InputWinningNumber();
    const bonus = await InputBonusNumber(winningNumber);
    const rank = CheckWinning(lottoNumberList, winningNumber, bonus);
    printWinning(rank);
    printReturnRate(rank, amount);
  }
}

export default App;
