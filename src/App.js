import LottosList from './LottosList.js';

import enterPurchaseAmount from './Input/enterPurchaseAmount.js';
import enterWinningNumbers from './Input/enterWinningNumbers.js';
import enterBonusNumber from './Input/enterBonusNumber.js';
import printPurchasedLottoAmount from './Output/printPurchasedLottoAmount.js';
import printLottosList from './Output/printLottosList.js';

class App {
  async play() {
    const purchaseAmount = await enterPurchaseAmount();

    const newLottosList = new LottosList(purchaseAmount);
    const lottosList = newLottosList.lottosList;
    printPurchasedLottoAmount(newLottosList.lottoAmount);
    printLottosList(lottosList);

    const winningNumbers = await enterWinningNumbers();

    const bonusNumber = await enterBonusNumber(winningNumbers);
  }
}

export default App;
