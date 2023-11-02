import Utility from "./utils/utility.js";
import { Console } from "@woowacourse/mission-utils";
class App {
  async play() {
    const util = new Utility();
    const purchaseQuantity = await util.getPurchaseQuantity();
    const myLottoArr = await util.getLottoNumber(purchaseQuantity, 1, 45, 6);
    myLottoArr.map((lotto) => Console.print(lotto));
    const winningLottoArr = await util.getWinningLotto();
    const places = util.compareNumbers(myLottoArr, winningLottoArr);
    util.statisticsOfWinningLotto(places);
  }
}

export default App;
