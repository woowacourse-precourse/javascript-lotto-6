import { lottoChecker } from "./LottoChecker.js";
import { lottoBonusNumber, lottoBuyAmount, lottoWinningNumbers } from "./LottoInput.js";
import { lottoMachine } from "./LottoMachine.js";
import { printLottoAmount, printLottoNumbers, printLottoStatistics, printProfitRate } from "./LottoOutput.js";

const PRICE = 1000;

class App {
  async play() {
    const buyAmount = await lottoBuyAmount();

    const lottoQuantity = buyAmount / PRICE;
    printLottoAmount(lottoQuantity);

    const randomNumbers = await lottoMachine(lottoQuantity);
    printLottoNumbers(randomNumbers);

    const lotto = await lottoWinningNumbers();
    const bonusNumber = await lottoBonusNumber(lotto);
    const matchedData = lottoChecker(randomNumbers, lotto, bonusNumber);
    const winningCountData = printLottoStatistics(matchedData);
    printProfitRate(buyAmount, winningCountData);
  }
}

export default App;