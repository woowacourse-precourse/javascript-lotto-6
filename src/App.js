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
    this.randomNumbers = Array.from({length: 45}, (_, i) => i + 1);;
    this.lottoArray = new Array();
  }

  async play() {
    this.enterPurchaseAmount();
    this.createLottoArray();
    this.printLottoNumbers();
    this.enterWinningNumbers();
  }

  async enterPurchaseAmount() {
    const userPrice = await Console.readLineAsync("구입금액을 입력해 주세요.");
    Util.validatePurchasePrice(userPrice,this.basedAmount);
    this.purchaseAmount = userPrice / this.basedAmount;
  }

  createLottoArray() {
    for (let i = 0 ; i < this.purchaseAmount ; i += 1) {
      Random.shuffle(this.randomNumbers)
      this.lottoArray.push(new Lotto(array.slice(0, 6)));
    }
  }

  printLottoNumbers() {
    Console.print(this.purchaseAmount + "개를 구매했습니다.");

    this.lottoArray.forEach(lottoClass => {
      lottoClass.printNumbers();
    })

    Console.print("");
  }

  async enterWinningNumbers() {
    this.winningNumbers = await Console.readLineAsync("당첨 번호를 입력해 주세요.").split(",");
    this.winningBonusNumber = await Console.readLineAsync("보너스 번호를 입력해 주세요.");
    Util.validateLottoNumbers(this.winningNumbers, this.winningBonusNumber);
  }


}

export default App;
