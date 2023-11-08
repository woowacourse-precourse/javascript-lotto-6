import Utility from "./utils/utility.js";
import { Console } from "@woowacourse/mission-utils";
import { PrintView } from "./view/printView.js";
class App {
  async play() {
    const util = new Utility();
    const purchaseQuantity = await util.getPurchaseQuantity();
    const myLottoArr = await util.getLottoNumbers(purchaseQuantity, 1, 45, 6);
    PrintView.printLottoNumbers(myLottoArr);
    const mainLottoArr = await util.getWinningLotto();
    const bonusLotto = await util.getBonusLotto(mainLottoArr);
    const winningLottoArr = [mainLottoArr, bonusLotto];
    const matchedNumbers = util.compareNumbers(myLottoArr, winningLottoArr);
    const places = util.statisticsOfWinningLotto(matchedNumbers);
    const rateOfReturn = util.rateOfReturn(places, purchaseQuantity);
    PrintView.printRateOfReturn(rateOfReturn);
  }
}

export default App;
