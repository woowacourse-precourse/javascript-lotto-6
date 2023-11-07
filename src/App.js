import { consolePrint } from './util/libararyFeatures/MissionUtilHandler.js';
import purchaseService from './service/progress/purchaseService.js';
import winnigNumberService from './service/progress/winningNumberService.js';
import bonusNumberService from './service/progress/bonusNumberService.js';
import resultService from './service/progress/resultService.js';

class App {
  async play() {
    try {
      const purchaseData = await purchaseService();
      const lotto = await winnigNumberService();
      const bonusNumber = await bonusNumberService(lotto);

      resultService(purchaseData.purchasedLotto, lotto, bonusNumber, purchaseData.purchaseAmount);
    } catch (error) {
      consolePrint(error.message);
    }
  }
}

export default App;
