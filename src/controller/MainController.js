import Input from "../view/Input.js";
import Output from "../view/Output.js";
import Purchase from "../model/Purchase.js";
import Lotto from "../model/Lotto.js";
import Bonus from "../model/Bonus.js";
import RandomNumber from "./RandomLotto.js";
import Result from "./Result.js";

class MainController {
  lottoCount;
  lottoNumber;
  static async UserPurchase() {
    let userPurchaseAmount = await Input.getPurchaseAmount();
    while(true) {
      try {
        const purchase = new Purchase(userPurchaseAmount);
        this.userPurchaseAmount = userPurchaseAmount;
        this.lottoCount = purchase.getPurchaseAmount();
        Output.printPurchaseCount(this.lottoCount);
        break;
      }
      catch(error) {
        Output.printError(error);
        userPurchaseAmount = await Input.getPurchaseAmount();
      }
    }
  }
  static RandomLotto() {
    this.lottoNumber = RandomNumber.createRandomLottoNumber(this.lottoCount);
  }
}