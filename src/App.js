import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  LOTTO_UNIT = 1000;
  LOTTO_REWARD = [0, 2000000, 30000, 1500, 50, 5];
  LOTTO_RULES = [
    "",
    "6개 일치",
    "5개 일치, 보너스 볼 일치",
    "5개 일치",
    "4개 일치",
    "3개 일치",
  ];

  async play() {
    const payment = await this.getPayment();
    const lottoCount = parseInt(payment / this.LOTTO_UNIT);
    const lottoList = this.getPickedLottoList(lottoCount);
    this.printPickedLotto(lottoCount, lottoList);
    const winningNumbers = await this.getWinningNumber();
    const bonusNumber = await this.getBonusNumber(winningNumbers);
    const rankCount = this.getRankCount(winningNumbers, bonusNumber, lottoList);
    const rateOfReturn = this.calculateRateOfReturn(payment, rankCount);

    this.showResult(rankCount, rateOfReturn);
  }

  async getPayment() {
    try {
      const payment = await Console.readLineAsync(
          "구입금액을 입력해 주세요.\n"
      );
      this.validatePayment(payment);
      return +payment;
    } catch (e) {
      Console.print(e.message);
      return this.getPayment();
    }
  }

  validatePayment(payment) {
    if (!/^\d+$/g.test(payment)) {
      throw new Error("[ERROR] 구입 금액은 숫자로 입력하셔야 합니다.");
    } else if (+payment <= 0) {
      throw new Error("[ERROR] 구입 금액은 0원 이상 입력하셔야 합니다.");
    } else if (+payment % this.LOTTO_UNIT !== 0) {
      throw new Error("[ERROR] 구입 금액은 1000원으로 나누어져야 합니다.");
    }
  }

  getPickedLottoList(lottoCount) {
    const pickedLottoList = [];
    for (let i = 0; i < lottoCount; i++) {
      const pickedLotto = new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6));
      pickedLottoList.push(pickedLotto);
    }
    return pickedLottoList;
  }

  printPickedLotto(lottoCount, lottoList = []) {
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
    lottoList.forEach((lotto) =>
        Console.print(`[${lotto.getNumber()?.join(", ")}]`)
    );
  }

  async getWinningNumber() {
    try {
      const numbers = await Console.readLineAsync(
          "\n당첨 번호를 입력해 주세요.\n"
      );
      const winningNumber = numbers.split(",");
      return new Lotto(winningNumber);
    } catch (e) {
      Console.print(e.message);
      return this.getWinningNumber();
    }
  }

  async getBonusNumber(winningLotto) {
    try {
      const bonusNumber = await Console.readLineAsync(
          "\n보너스 번호를 입력해 주세요.\n"
      );

      this.validateBonusNumber(bonusNumber, winningLotto);
      return +bonusNumber;
    } catch (e) {
      Console.print(e.message);
      return this.getBonusNumber();
    }
  }

  validateBonusNumber(bonusNumber, winningLotto) {
    const winningNumbers = winningLotto.getNumber();
    if (!/^\d+$/g.test(bonusNumber) || +bonusNumber < 1 || +bonusNumber > 45) {
      throw new Error(
          "[ERROR] 보너스 번호는 1과 45 사이의 숫자로 입력하셔야 합니다."
      );
    } else if (winningNumbers.includes(+bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복되면 안됩니다.");
    }
  }

  getRankCount(winningLotto, bonusNumber, lottoList) {
    const winningNumbers = winningLotto.getNumber();
    let rankCount = Array(6).fill(0);
    lottoList.forEach((lotto) => {
      const rank = lotto.getRank(winningNumbers, bonusNumber);
      rankCount[rank] += 1;
    });

    return rankCount;
  }
  calculateRateOfReturn(payment, rankCount) {
    const profit = rankCount.reduce(
        (total, count, idx) =>
            total + count * this.LOTTO_UNIT * this.LOTTO_REWARD[idx],
        0
    );

    const rateOfReturn = (profit / payment) * 100;
    return rateOfReturn.toFixed(1);
  }

  showResult(rankCount, rateOfReturn) {
    Console.print(`\n당첨 통계\n---`);
    for (let i = 5; i > 0; i--) {
      const rule = this.LOTTO_RULES[i];
      const reward = this.LOTTO_REWARD[i] * this.LOTTO_UNIT;
      const count = rankCount[i];
      Console.print(
          `${rule} (${reward.toLocaleString("ko-KR")}원) - ${count}개`
      );
    }
    Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  }
}

export default App;
