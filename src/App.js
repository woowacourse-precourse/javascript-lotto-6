import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  totalLotto = [];
  winningNumber = [];
  bonusNumber = 0;
  award = {
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
    fifth: 0,
  };

  async payAmount() {
    const amount = await MissionUtils.Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );

    if (isNaN(amount)) throw new Error("[ERROR] 구입 금액은 숫자여야합니다.");

    return parseInt(amount);
  }

  quantityLotto(amount) {
    if (amount % 1000 !== 0)
      throw new Error("[ERROR] 구입 금액은 1000으로 나누어 떨어져야 합니다.");

    return amount / 1000;
  }

  perchaseLotto(number) {
    MissionUtils.Console.print(`\n${number}를 구입했습니다.`);

    for (let i = 0; i < number; i++) {
      const number = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      MissionUtils.Console.print(number);
      this.totalLotto.push(new Lotto(number));
    }
  }

  async enterWinningNumber() {
    const numbers = await MissionUtils.Console.readLineAsync(
      "\n당첨번호를 입력해 주세요.\n"
    );

    this.winningNumber = numbers.split(",").map(Number);

    for (const num of this.winningNumber) {
      if (!(num >= 1 && num <= 45))
        throw new Error("[ERROR] 당첨 번호는 1과 45 사이의 숫자여야합니다.");
    }

    if (this.winningNumber.length !== 6)
      throw new Error("[ERROR] 당첨 번호는 6개여야합니다.");

    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error("[ERROR] 당첨 번호는 중복되지 않아야 합니다.");
    }
  }

  async enterBosunNumber() {
    const number = await MissionUtils.Console.readLineAsync(
      "\n보너스 번호를 입력해 주세요.\n"
    );

    if (isNaN(number)) throw new Error("[ERROR] 보너스 번호는 숫자여야합니다.");

    if (!(num >= 1 && num <= 45))
      throw new Error("[ERROR] 당첨 번호는 1과 45 사이의 숫자여야합니다.");

    this.bonusNumber = parseInt(number);
  }

  checkResult() {
    for (const lotto of this.totalLotto) {
      const num = lotto.checkWinningNumbers(this.winningNumber);

      if (num === 6) this.award.first += 1;
      else if (num === 5 && lotto.checkBonusNumber(this.bonusNumber))
        this.award.second += 1;
      else if (num === 5) this.award.third += 1;
      else if (num === 4) this.award.fourth += 1;
      else if (num === 3) this.award.fifth += 1;
    }
  }

  printResult() {
    MissionUtils.Console.print("\n당첨 통계\n---");
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${this.award.fifth}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${this.award.fourth}개`);
    MissionUtils.Console.print(
      `5개 일치 (1,500,000원) - ${this.award.third}개`
    );
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.award.second}개`
    );
    MissionUtils.Console.print(
      `6개 일치 (2,000,000,000원) - ${this.award.first}개`
    );
  }

  printRateOfReturn(amount) {
    let sum = 0;
    const rates = {
      first: 2000000000,
      second: 30000000,
      third: 1500000,
      fourth: 50000,
      fifth: 5000,
    };

    for (const award in this.award) {
      sum += this.award[award] * rates[award];
    }

    const rateOfReturn = (((sum - amount) / amount) * 100).toFixed(2);
    MissionUtils.Console.print(`총 수익률은 ${rateOfReturn}% 입니다.`);
  }

  async play() {
    const amount = await this.payAmount();
    const quantity = this.quantityLotto(amount);
    this.perchaseLotto(quantity);
    await this.enterWinningNumber();
    await this.enterBosunNumber();
    this.checkResult();
    this.printResult();
    this.printRateOfReturn(amount);
  }
}

export default App;
