import LottosList from './LottosList.js';

import enterPurchaseAmount from './Input/enterPurchaseAmount.js';
import enterWinningNumbers from './Input/enterWinningNumbers.js';
import enterBonusNumber from './Input/enterBonusNumber.js';
import printPurchasedLottoAmount from './Output/printPurchasedLottoAmount.js';
import printLottosList from './Output/printLottosList.js';
import calculateStatistics from './Process/calculateStatistics.js';
import printStatistics from './Output/printStatistics.js';
import calculateGrossReturn from './Process/calculateGrossReturn.js';
import printGrossReturn from './Output/printGrossReturn.js';

class App {
  async play() {
    const purchaseAmount = await enterPurchaseAmount();

    const newLottosList = new LottosList(purchaseAmount);
    const lottosList = newLottosList.lottosList;
    printPurchasedLottoAmount(newLottosList.lottoAmount);
    printLottosList(lottosList);

    const winningNumbers = await enterWinningNumbers();

    const bonusNumber = await enterBonusNumber(winningNumbers);

    const statistics = calculateStatistics(lottosList, winningNumbers, bonusNumber);

    printStatistics(statistics);

    const grossReturn = calculateGrossReturn(purchaseAmount, statistics);

    printGrossReturn(grossReturn);
  }
}

export default App;
