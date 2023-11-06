import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  LOTTO_UNIT = 1000;
  LOTTO_REWARD = [0, 2000000, 30000, 1500, 50, 5];
  LOTTO_LENGTH = 6;
  LOTTO_RULES = ["", "6개 일치", "5개 일치, 보너스 볼 일치", "5개 일치", "4개 일치", "3개 일치"]

  async play() {
    const payment = await this.getPayment();
    const lottoCount = parseInt(payment / this.LOTTO_UNIT);
    const lottoList = this.getPickedLottoList(lottoCount);
    this.printPickedLotto(lottoCount, lottoList);
    const winningNumbers = await this.getWinningNumber();
    const bonusNumber = await this.getBonusNumber();
    const rankCount = this.getRankCount(winningNumbers, bonusNumber, lottoList);
    const rateOfReturn = this.calculateRateOfReturn(payment, rankCount)

    this.showResult(rankCount, rateOfReturn)
  }

  async getPayment() {
    const payment = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    this.validatePayment(payment);
    return +payment;
  }

  validatePayment(payment) {
    if (!/\d/g.test(payment)) {
      throw new Error("[ERROR] 구입 금액은 숫자로 입력하셔야 합니다.");
    } else if (+payment <= 0) {
      throw new Error("[ERROR] 구입 금액은 0원 이상 입력하셔야 합니다.");
    } else if (+payment % this.LOTTO_UNIT !== 0) {
      throw new Error("[ERROR] 구입 금액은 1000원으로 나누어져야 합니다.");
    }
  }

  pickLotto() {
    const pickNumbers = [];
    while (numbers.length < this.LOTTO_LENGTH) {
      const number = Random.pickNumberInRange(1, 45);
      if (!pickNumbers.includes(number)) {
        pickNumbers.push(number);
      }
    }
    return new Lotto(pickNumbers.sort((a, b) => a - b));
  }

  getPickedLottoList(lottoCount) {
    const pickedLottoList = [];
    for (let i = 0; i < lottoCount; i++) {
      const pickedLotto = this.pickLotto();
      pickedLottoList.push(pickedLotto);
    }
    return pickedLottoList;
  }

  printPickedLotto(lottoCount, lottoList = []) {
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
    lottoList.forEach((lotto) => Console.print(lotto.getNumber()));
  }

  async getWinningNumber() {
    const numbers = await Console.readLineAsync(
        "\n당첨 번호를 입력해 주세요.\n"
    ).split(",");
    const winningNumber = this.validateWinningNumber(numbers);
    return new Lotto(winningNumber.sort((a, b) => a - b));
  }

  validateWinningNumber(numbers) {
    const winningNumber = [];
    numbers.forEach((number) => {
      if (!/\d/g.test(number)) {
        throw new Error("[ERROR] 로또 번호는 숫자로 입력해야 합니다.");
      } else if (+number < 1 || +number > 45) {
        throw new Error(
            "[ERROR] 로또 번호는 1~45 사이의 숫자를 입력해야 합니다."
        );
      } else if (winningNumber.includes(+number)) {
        throw new Error("[ERROR] 중복된 숫자는 입력할 수 없습니다.");
      }
      winningNumber.push(+number);
    });
    return winningNumber;
  }

  async getBonusNumber() {
    const bonusNumber = await Console.readLineAsync(
        "\n보너스 번호를 입력해 주세요.\n"
    );

    if (!/\d/g.test(bonusNumber) || +bonusNumber < 1 || +bonusNumber > 45) {
      throw new Error(
          "[ERROR] 보너스 번호는 1과 45 사이의 숫자로 입력하셔야 합니다."
      );
    }
    return +bonusNumber;
  }

  getRankCount(winningNumbers, bonusNumber, lottoList) {
    let rankCount = Array.from(6).fill(0);
    lottoList.forEach((lotto, idx) => {
      const rank = lotto.getRank(winningNumbers, bonusNumber);
      rankCount[rank] += 1;
    });

    return rankCount;
  }
  calculateRateOfReturn(payment, rankCount) {
    const profit = rankCount.reduce((total, count, idx) => total + count * this.LOTTO_UNIT * this.LOTTO_REWARD[idx],0)
    const rateOfReturn = (payment / profit) * 100
    return rateOfReturn.toFixed(1)
  }

  showResult(rankCount, rateOfReturn) {
    Console.print(`\n당첨 통계\n---`);
    for (let i = 6; i > -1; i--) {
      const rule = this.LOTTO_RULES[i]
      const reward = this.LOTTO_REWARD[i] * this.LOTTO_UNIT
      const count = rankCount[i]
      Console.print(`${rule} (${reward.toLocaleString('ko-KR')}원) - ${count}개`);
    }
    Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  }
}

export default App;
