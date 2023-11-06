import { Random, Console } from "@woowacourse/mission-utils";
import * as Util from "./Util";
import { Lotto } from "./Lotto.js";

class App {
  numbersArray;
  purchaseAmount;
  basedAmount;
  winningNumbers;
  winningBonusNumber;

  constructor() {
    this.basedAmount = 1000;
  }

  async play() {
    this.enterPurchaseAmount();
    this.createRandomLottoNumbers();
    this.printRandomLottoNumbers();
    this.enterWinningNumbers();
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

  printRandomLottoNumbers() {
    Console.print(this.purchaseAmount + "개를 구매했습니다.");

    for (let i = 0 ; i < this.purchaseAmount ; i += 1) {
      Console.print("[" + this.numbersArray[i] + "]");
    }

    Console.print("");
  }

  async enterWinningNumbers() {
    this.winningNumbers = await Console.readLineAsync("당첨 번호를 입력해 주세요.").split(",");
    this.winningBonusNumber = await Console.readLineAsync("보너스 번호를 입력해 주세요.");
    Util.validateLottoNumbers(this.winningNumbers, this.winningBonusNumber);
  }

  
}

export default App;
