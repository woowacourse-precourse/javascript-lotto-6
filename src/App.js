import LottosList from './LottosList.js';

import tryEnterPurchaseAmount from './Input/tryEnterPurchaseAmount.js';
import tryEnterWinningNumbers from './Input/tryEnterWinningNumbers.js';
import tryEnterBonusNumber from './Input/tryEnterBonusNumber.js';
import printPurchasedLottoAmount from './Output/printPurchasedLottoAmount.js';
import printLottosList from './Output/printLottosList.js';
import calculateStatistics from './Process/calculateStatistics.js';
import printStatistics from './Output/printStatistics.js';
import calculateGrossReturn from './Process/calculateGrossReturn.js';
import printGrossReturn from './Output/printGrossReturn.js';

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
