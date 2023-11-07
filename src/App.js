import getPurchase from './service/getPurchase.js';
import getLottoNumber from './service/getLottoNumber.js';
import { consolePrint } from './util/libararyFeatures/MissionUtilHandler.js';
import getBonusNumber from './service/getBonusNumber.js';
import lottoMatcher from './util/matcher/lottoMatcher.js';
import winningStatisticsUI from './util/UI/gameResult/winningStatisticsUI.js';
import purchaseAmountUI from './util/UI/gameStart/purchaseAmountUI.js';
import receiveWinningLottoUI from './util/UI/gameStart/receiveWinningLottoUI.js';
import receiveBonusNumberUI from './util/UI/gameStart/receiveBonusNumberUI.js';
import lottoCompareService from './service/lottoCompareService.js';

class App {
  async play() {
    try {
      const purchase = await purchaseAmountUI();
      const purchaseValues = await getPurchase(purchase);

      const winningNumber = await receiveWinningLottoUI();
      const lotto = await getLottoNumber(winningNumber);

      const bonusInput = await receiveBonusNumberUI();
      const bonusNumber = await getBonusNumber(bonusInput, lotto);

      const matchResult = lottoMatcher(purchaseValues.purchasedLotto, lotto, bonusNumber);
      const lottoResult = lottoCompareService(matchResult, purchaseValues.purchaseAmount);

      winningStatisticsUI(lottoResult);
    } catch (error) {
      consolePrint(error.message);
    }
  }
}

export default App;
