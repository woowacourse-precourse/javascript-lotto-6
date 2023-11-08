import { Random, Console } from "@woowacourse/mission-utils";
import * as Util from "./Util";
import Lotto from "./Lotto.js";

class App {
  lottoArray;
  purchaseAmount;
  basedAmount;
  winningNumbers;
  winningBonusNumber;
  winningCounts;
  totalPrice;
  prizeMoney;

  constructor() {
    this.basedAmount = 1000;
    this.totalPrice = 0;
    this.lottoArray = [];
    this.winningCounts = new Array(6).fill(0);
    this.prizeMoney = [0, 2000000000, 30000000, 1500000, 50000, 5000];
  }

  async play() {
    await this.enterPurchaseAmount();
    this.createLottoArray();
    this.printLottoNumbers();
    await this.enterWinningNumbers();
    this.#matchLotto();
    this.printWinningResults();
  }

  async enterPurchaseAmount() {
    try {
      let inputPrice = await Console.readLineAsync("구입금액을 입력해 주세요.");
      let userPrice = Number(inputPrice);
      Util.validatePurchasePrice(userPrice,this.basedAmount);
      this.purchaseAmount = userPrice / this.basedAmount;
    } catch (error) {
      Console.print(error.message);
      return await this.enterPurchaseAmount();
    }
  }

  createLottoArray() {
    for (let i = 0 ; i < this.purchaseAmount ; i += 1) {
      let randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.lottoArray.push(new Lotto(randomNumbers));
    }
  }

  printLottoNumbers() {
    Console.print(this.purchaseAmount + "개를 구매했습니다.");

    this.lottoArray.forEach(lottoClass => {
      lottoClass.printNumbers();
    })
  }

  async enterWinningNumbers() {
    try {
      this.winningNumbers = (await Console.readLineAsync("당첨 번호를 입력해 주세요.")).split(",").map(Number);
      this.winningBonusNumber = await Console.readLineAsync("보너스 번호를 입력해 주세요.");
      Util.validateLottoNumbers(this.winningNumbers, this.winningBonusNumber);
    } catch (error) {
      Console.print(error.message)
      return await this.enterWinningNumbers();
    }
  }

  #matchLotto() {
    this.lottoArray.forEach(lotto => {
      let rank = lotto.confirmWinning(this.winningNumbers,this.winningBonusNumber);
      this.winningCounts[rank] += 1;
    })
  }

  #calculateTotalPrice() {
    for (let i = 1 ; i <= 5 ; i += 1) {
      this.totalPrice += this.prizeMoney[i] * this.winningCounts[i];
    }
  }

  #calculateProfit() {
    const userPrice = this.purchaseAmount * this.basedAmount;
    return (this.totalPrice / userPrice * 100).toFixed(1);
  }

  printWinningResults() {
    Console.print("당첨 통계");
    Console.print("---")
    Console.print("3개 일치 (5,000원) - " + this.winningCounts[5] + "개");
    Console.print("4개 일치 (50,000원) - " + this.winningCounts[4] + "개");
    Console.print("5개 일치 (1,500,000원) - " + this.winningCounts[3] + "개");
    Console.print("5개 일치, 보너스 볼 일치 (30,000,000원) - " + this.winningCounts[2] + "개");
    Console.print("6개 일치 (2,000,000,000원) - " + this.winningCounts[1] + "개");
    
    this.#calculateTotalPrice();
    Console.print("총 수익률은 " + this.#calculateProfit() + "%입니다.");
  }
}

export default App;
