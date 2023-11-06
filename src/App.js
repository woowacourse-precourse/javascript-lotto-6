import { Random, Console } from "@woowacourse/mission-utils";
import * as Util from "./Util";
import { Lotto } from "./Lotto.js";

class App {
  randomNumbers;
  lottoArray;
  purchaseAmount;
  basedAmount;
  winningNumbers;
  winningBonusNumber;

  constructor() {
    this.basedAmount = 1000;
    this.randomNumbers = new Array(6);
    this.lottoArray = new Array();
  }

  async play() {
    this.enterPurchaseAmount();
    this.createLottoArray();
    this.printRandomLottoNumbers();
    this.enterWinningNumbers();
  }

  async enterPurchaseAmount() {
    const userPrice = await Console.readLineAsync("구입금액을 입력해 주세요.");
    Util.validatePurchasePrice(userPrice,this.basedAmount);
    this.purchaseAmount = userPrice / this.basedAmount;
  }

  createLottoArray() {
    for (let i = 0 ; i < this.purchaseAmount ; i += 1) {
      for (let j = 0 ; j < 6 ; j += 1) {
        this.randomNumbers[j] = Random.pickNumberInRange(1, 45);
      }
      this.lottoArray.push(new Lotto(this.randomNumbers));
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
