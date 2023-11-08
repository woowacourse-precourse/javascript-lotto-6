import LottosList from './LottosList.js';

import tryEnterPurchaseAmount from './input/tryEnterPurchaseAmount.js';
import tryEnterWinningNumbers from './input/tryEnterWinningNumbers.js';
import tryEnterBonusNumber from './input/tryEnterBonusNumber.js';
import printPurchasedLottoAmount from './output/printPurchasedLottoAmount.js';
import printLottosList from './output/printLottosList.js';
import calculateStatistics from './process/calculateStatistics.js';
import printStatistics from './output/printStatistics.js';
import calculateGrossReturn from './process/calculateGrossReturn.js';
import printGrossReturn from './output/printGrossReturn.js';

class App {
  async play() {
    const purchaseAmount = await tryEnterPurchaseAmount();

    const newLottosList = new LottosList(purchaseAmount);
    printPurchasedLottoAmount(newLottosList.lottoAmount);
    printLottosList(newLottosList.lottosList);

    const winningNumbers = await tryEnterWinningNumbers();

    const bonusNumber = await tryEnterBonusNumber(winningNumbers);

    const statistics = calculateStatistics(newLottosList.lottosList, winningNumbers, bonusNumber);
    printStatistics(statistics);

    const grossReturn = calculateGrossReturn(purchaseAmount, statistics);
    printGrossReturn(grossReturn);
  }
}

export default App;
