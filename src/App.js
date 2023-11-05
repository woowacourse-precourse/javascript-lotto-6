import { Random, Console } from "@woowacourse/mission-utils";
import * as Util from "./Util";
import { Lotto } from "./Lotto.js";

class App {
  numbersArray;
  purchaseAmount;
  basedAmount;

  constructor() {
    this.basedAmount = 1000;
  }

  async play() {
    this.enterPurchaseAmount();
    this.createRandomLottoNumbers();
  }

  async enterPurchaseAmount() {
    const userPrice = await Console.readLineAsync("구입금액을 입력해 주세요.");
    Util.validatePurchasePrice(userPrice,this.basedAmount);
    this.purchaseAmount = userPrice / this.basedAmount;
  }

  createRandomLottoNumbers() {
    this.numbersArray = Util.create2DArray(this.purchaseAmount,6);
    for (let i = 0 ; i < this.purchaseAmount ; i += 1) {
      for (let j = 0 ; j < 6 ; j += 1) {
        this.numbersArray[i][j] = Random.pickNumberInRange(1, 45);
      }
    }
  }
}

export default App;
