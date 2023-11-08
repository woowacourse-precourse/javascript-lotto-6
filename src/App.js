import Lotto from "./Lotto.js";
import { Random, Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.lottos = [];
    this.prizes = [2000000000, 30000000, 1500000, 50000, 5000];
    this.matchCounts = [6, 5, 5, 4, 3];
    this.results = [0, 0, 0, 0, 0];
  }

  async play() {
    const amount = await this.getInputAmount();
    this.generateLottos(amount);
    await this.showLottos();
    const winningNumbers = await this.getInputWinningNumbers();
    const bonusNumber = await this.getInputBonusNumber(winningNumbers);
    this.calculateResult(winningNumbers, bonusNumber);
    this.showResult();
  }


  async getInputAmount() {
    let amount;
    while (true) {
      amount = await Console.readLineAsync("구입금액을 입력해 주세요.");
      if (this.isPurchasable(amount)) {  
        break;
      }
      Console.print("[ERROR] 로또 구입 금액은 1000원 이상이며, 1000원 단위여야 합니다.");
    }
    this.amount = Number(amount); 
    return Number(amount); 
  }
  isPurchasable(amount) {
    return amount >= 1000 && amount % 1000 === 0;
  }



  generateLottos(amount) {
    const lottoCount = amount / 1000;
    for (let i = 0; i < lottoCount; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      this.lottos.push(new Lotto(numbers));
    }
  }

  async showLottos() {
    Console.print(`${this.lottos.length}개를 구매했습니다.`);
    this.lottos.forEach(lotto => Console.print(`[${lotto.numbers.join(", ")}]`));
  }

  async getInputWinningNumbers() {
    let numbers = [];
    while (true) {
      numbers = (await Console.readLineAsync("당첨 번호를 입력해 주세요.")).split(",").map(Number);
      try {
        new Lotto(numbers);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return numbers;
  }

  async getInputBonusNumber(winningNumbers) {
    let bonusNumber = 0;
    while (true) {
      const inputNumbers = await Console.readLineAsync("보너스 번호를 입력해 주세요.");
      try {
        if (inputNumbers.split(",").length > 1) {
          throw new Error("[ERROR] 보너스 번호는 한 개만 입력해야 합니다.");
        }
        bonusNumber = Number(inputNumbers);
        if (!Number.isInteger(bonusNumber)) {
          throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
        }
        if (bonusNumber < 1 || bonusNumber > 45) {
          throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
        }
        if (winningNumbers.includes(bonusNumber)) {
          throw new Error("[ERROR] 보너스 번호는 이미 선택된 로또 번호와 중복되면 안됩니다.");
        }
        return bonusNumber;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }




  calculateResult(winningNumbers, bonusNumber) {
    this.lottos.forEach(lotto => {
      const matchCount = lotto.numbers.filter(number => winningNumbers.includes(number)).length;
      if (matchCount === 5 && lotto.numbers.includes(bonusNumber)) {
        this.results[1]++;
      } else {
        const index = this.matchCounts.findIndex(count => count === matchCount);
        if (index !== -1) {
          this.results[index]++;
        }
      }
    });
  }

showResult() {
    Console.print("당첨 통계");
    Console.print("---------");
    const prizeMessages = [
      "3개 일치 (5,000원)",
      "4개 일치 (50,000원)",
      "5개 일치 (1,500,000원)",
      "5개 일치, 보너스 볼 일치 (30,000,000원)",
      "6개 일치 (2,000,000,000원)"
    ];
    this.results.forEach((result, index) => {
      Console.print(`${prizeMessages[index]} - ${result}개`);
    });
    const profitRate = this.calculateProfitRate();
    Console.print(`총 수익률은 ${profitRate.toFixed(2)}%입니다.`);
  }

calculateProfitRate() {
    const prizeMoney = [5000, 50000, 1500000, 30000000, 2000000000];
    let totalPrizeMoney = 0;
    this.results.forEach((result, index) => {
      totalPrizeMoney += result * prizeMoney[index];
    });
    const profitRate = (totalPrizeMoney / this.amount) * 100;
    return profitRate;
  }

}

export default App;
