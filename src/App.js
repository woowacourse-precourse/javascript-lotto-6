import InputAmount from "./Input/InputAmount.js";
import InputBonusNumber from "./input/InputBonusNumber.js";
import InputWinningNumbers from "./input/InputWinningNumbers.js";
import RandomNumber from "./RandomNumber.js";
import LottoCount from "./LottoCount.js";
import { printLottoNumbers } from "./print.js";
class App {
  async play() {
    // const amount = await InputAmount();
    // const count = LottoCount(amount);
    // const lottoNumbers = RandomNumber(count);
    // printLottoNumbers(lottoNumbers);
    // const winningNumbers = await InputWinningNumbers();
    const bonus = await InputBonusNumber();
  }
}

export default App;
