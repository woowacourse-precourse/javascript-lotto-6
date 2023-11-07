import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
    #lottoPrice = 1000;
    #prizeMoney = [2000000000, 30000000, 1500000, 50000, 5000];
    #winningCounts = [0, 0, 0, 0, 0];
    async play() {}

    async #getPurchaseAmount() {
        const input = await Console.readLineAsync("구입금액을 입력해 주세요.");
        const amount = parseInt(input, 10);
        if (isNaN(amount) || amount % this.#lottoPrice !== 0) {
            throw new Error(
                "[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다."
            );
        }
        return amount;
    }

    #purchaseLottos(count) {
        return Array.from({ length: count }, () => {
            const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
            return new Lotto(numbers);
        });
    }

    #printLottos(lottos) {
        Console.print(`${lottos.length}개를 구매했습니다.`);
        lottos.forEach((lotto) =>
            Console.print(`[${lotto.numbers.join(", ")}]`)
        );
    }

    async #getWinningNumbersAndBonus() {
        const winningNumbersInput = await Console.readLineAsync("당첨 번호를 입력해 주세요.");
        const winningNumbers = winningNumbersInput.split(",").map((num) => parseInt(num.trim(), 10));
        if (winningNumbers.some((num) => isNaN(num) || num < 1 || num > 45) || new Set(winningNumbers).size !== 6) {
            throw new Error("[ERROR] 당첨 번호를 잘못 입력하셨습니다.");}
        const bonusNumberInput = await Console.readLineAsync(
            "보너스 번호를 입력해 주세요."
        );
        const bonusNumber = parseInt(bonusNumberInput.trim(), 10);
        if (isNaN(bonusNumber) || bonusNumber < 1 || bonusNumber > 45 || winningNumbers.includes(bonusNumber) ) {
            throw new Error("[ERROR] 잘못된 보너스 번호입니다.");}
        return [winningNumbers, bonusNumber];}

    #calculateResults(lottos, winningNumbers, bonusNumber) {
        lottos.forEach((lotto) => {
            const matchCount = lotto.numbers.filter((num) =>winningNumbers.includes(num)).length;
            if (matchCount === 6) {this.#winningCounts[0]++;} else if (
                matchCount === 5 &&lotto.numbers.includes(bonusNumber)) {
                this.#winningCounts[1]++;} 
                else if (matchCount === 5) {this.#winningCounts[2]++;} 
                else if (matchCount === 4) {this.#winningCounts[3]++;}
                else if (matchCount === 3) {this.#winningCounts[4]++;}
        });
    }

    #printResults(amountSpent) {
      Console.print("당첨 통계");
      Console.print("---------");
      let totalPrize = 0;
      const prizeMessages = ["6개 일치 (2,000,000,000원) - ","5개 일치, 보너스 볼 일치 (30,000,000원) - ","5개 일치 (1,500,000원) - ","4개 일치 (50,000원) - ","3개 일치 (5,000원) - ",];
      for (let i = 0; i < this.#winningCounts.length; i++) {
          Console.print(`${prizeMessages[i]}${this.#winningCounts[i]}개`);
          totalPrize += this.#prizeMoney[i] * this.#winningCounts[i];
      }
      const yieldRate = ((totalPrize / amountSpent) * 100).toFixed(1);
      Console.print(`총 수익률은 ${yieldRate}%입니다.`);
  }
}

export default App;
