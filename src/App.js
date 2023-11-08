import { MissionUtils } from "@woowacourse/mission-utils";

const PRICE_MESSAGE = "구입금액을 입력해 주세요.\n";
const ERROR_PRICE_INPUT = "[ERROR] 숫자가 잘못된 형식입니다.\n";
const WINNING_NUMBERS = "\n당첨 번호를 입력해 주세요.\n";
const BONUS_NUM = "\n보너스 번호를 입력해 주세요.\n";

class App {
  constructor() {
    this.lottos = [];
    this.price = 0;
  }

  async play() {
    await this.#controller();
  }

  async #controller() {
    while (true) {
      try {
        this.price = await this.#readPrice();
        this.lottos = this.#buyLotto(this.price / 1000);
        const winningNums = await this.#readWinningNumbers();
        const bonusNum = await this.#readBonusNumber();
        this.#calculateResult(this.lottos, winningNums, bonusNum, this.price);
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
  }

  async #readPrice() {
    const input = await MissionUtils.Console.readLineAsync(PRICE_MESSAGE);
    const price = Number(input);
    if (isNaN(price) || price % 1000 !== 0) {
      throw new Error(ERROR_PRICE_INPUT);
    }
    return Number(input);
  }

  #buyLotto(count) {
    let lottos = [];
    for (let i = 0; i < count; i++) {
      lottos.push(
        MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort(
          (a, b) => a - b,
        ),
      );
    }
    MissionUtils.Console.print("\n" + count + "개를 구매했습니다.");
    lottos.forEach((lotto) => {
      MissionUtils.Console.print(`[${lotto.join(", ")}]`);
    });
    return lottos;
  }

  async #readWinningNumbers() {
    const input_winningNums =
      await MissionUtils.Console.readLineAsync(WINNING_NUMBERS);
    return input_winningNums.split(",").map((num) => Number(num.trim()));
  }

  async #readBonusNumber() {
    return await MissionUtils.Console.readLineAsync(BONUS_NUM);
  }

  #matchCount(lotto, winningNums, bonusNum) {
    const match = lotto.filter((num) => winningNums.includes(num)).length;
    return match + (match === 5 && lotto.includes(bonusNum) ? 0.5 : 0);
  }

  #calculateWinning(lottos, winningNums, bonusNum) {
    const results = { 3: 0, 4: 0, 5: 0, 5.5: 0, 6: 0 };
    lottos.forEach((lotto) => {
      const count = this.#matchCount(lotto, winningNums, bonusNum);
      if (count in results) results[count]++;
    });
    return results;
  }

  #calculateResult(lottos, winningNums, bonusNum, price) {
    const results = this.#calculateWinning(lottos, winningNums, bonusNum);
    const totalWinnings = this.#calculateTotalWinning(results);
    MissionUtils.Console.print(
      `당첨 통계\n---\n` +
        `3개 일치 (5,000원) - ${results[3]}개\n` +
        `4개 일치 (50,000원) - ${results[4]}개\n` +
        `5개 일치 (1,500,000원) - ${results[5]}개\n` +
        `5개 일치, 보너스 볼 일치 (30,000,000원) - ${results["5.5"]}개\n` +
        `6개 일치 (2,000,000,000원) - ${results[6]}개\n` +
        `총 수익률은 ${this.#calculatePercentage(price, totalWinnings)}입니다.`,
    );
  }

  #calculateTotalWinning(results) {
    const prizeObject = {
      3: 5000,
      4: 50000,
      5: 1500000,
      5.5: 30000000,
      6: 2000000000,
    };
    return Object.keys(results).reduce((winning, key) => {
      const count = parseFloat(key);
      return winning + results[count] * prizeObject[count];
    }, 0);
  }

  #calculatePercentage(price, totalWinnings) {
    const percentage = (totalWinnings / price) * 100;
    const roundedPercentage = Math.round(percentage * 100) / 100;
    return roundedPercentage.toFixed(1);
  }
}

export default App;
