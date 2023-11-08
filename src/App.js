import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
class App {
  async play() {
    const purchaseAmount = await this.getPurchaseAmount();
    const lottos = this.makeLottos(purchaseAmount);
    this.printLottos(lottos);
    const winningNumbers = await this.getFullWinningNumbers();
    const results = this.getResult(lottos, winningNumbers);
    this.printResult(results);
  }
  async getPurchaseAmount() {
    const purchaseAmount = await MissionUtils.Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );
    MissionUtils.Console.print("");
    return parseInt(purchaseAmount);
  }
  makeLottos(purchaseAmount) {
    const lottoCount = parseInt(purchaseAmount / 1000);
    const lottos = [];
    for (let i = 0; i < lottoCount; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(numbers);
      lottos.push(lotto);
    }
    return lottos;
  }
  printLottos(lottos) {
    MissionUtils.Console.print(`${lottos.length}개를 구매했습니다.`);
    for (const lotto of lottos) {
      MissionUtils.Console.print("[" + lotto.toString() + "]");
    }
    MissionUtils.Console.print("");
  }
  async getFullWinningNumbers() {
    const formattingWinningNumbers = await this.getWinningNumbers();
    const formattingFullWinningNumbers = await this.getBonusNumber(
      formattingWinningNumbers
    );

    return formattingFullWinningNumbers;
  }
  async getWinningNumbers() {
    const winningNumbers = await MissionUtils.Console.readLineAsync(
      "당첨 번호를 입력해 주세요.\n"
    );
    MissionUtils.Console.print("");
    const formattingWinningNumbers = this.isValidWinningNumbers(
      winningNumbers.split(",").map((num) => parseInt(num)),
      6
    );
    return formattingWinningNumbers;
  }
  async getBonusNumber(formattingWinningNumbers) {
    const bonusNumber = await MissionUtils.Console.readLineAsync(
      "보너스 번호를 입력해 주세요.\n"
    );
    MissionUtils.Console.print("");
    const formattingFullWinningNumbers = [
      ...formattingWinningNumbers,
      parseInt(bonusNumber),
    ];
    return this.isValidWinningNumbers(formattingFullWinningNumbers, 7);
  }
  isValidWinningNumbers(numbers, lotttoLength) {
    if (numbers.every((num) => !isNaN(num)) === false) {
      throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
    }
    if (numbers.length !== lotttoLength) {
      throw new Error(`[ERROR] 로또 번호는 ${lotttoLength}개여야 합니다.`);
    }
    if (new Set(numbers).size !== lotttoLength) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
    if (numbers.some((num) => num < 1 || num > 45)) {
      throw new Error("[ERROR] 로또 번호는 1과 45 사이여야 합니다.");
    }
    return numbers;
  }
  getResult(lottos, winningNumbers) {
    const results = [0, 0, 0, 0, 0, 0];
    for (const lotto of lottos) {
      const { matchCount, isBonusNumberMatch } =
        lotto.getResult(winningNumbers);
      results[this.judgeResult(matchCount, isBonusNumberMatch)] += 1;
    }
    return results;
  }
  judgeResult(matchCount, isBonusNumberMatch) {
    if (matchCount === 6) return 5;
    if (matchCount === 5 && isBonusNumberMatch) return 4;
    if (matchCount === 5) return 3;
    if (matchCount === 4) return 2;
    if (matchCount === 3) return 1;
    return 0;
  }
  getProfitRate(results) {
    let sum = 0;
    const totalPrize = results.reduce((acc, cur, idx) => {
      sum += cur;
      return acc + cur * this.getPrize(idx);
    }, 0);
    if (sum === 0) return (0).toFixed(1);
    return ((totalPrize / sum) * 100).toFixed(1);
  }
  getPrize(idx) {
    const prizes = [0, 5, 50, 1500, 30000, 2000000];
    return prizes[idx];
  }
  printResult(results) {
    MissionUtils.Console.print("당첨 통계");
    MissionUtils.Console.print("---");
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${results[1]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${results[2]}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${results[3]}개`);
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${results[4]}개`
    );
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${results[5]}개`);
    MissionUtils.Console.print(
      `총 수익률은 ${this.getProfitRate(results)}%입니다.`
    );
  }
}

export default App;
