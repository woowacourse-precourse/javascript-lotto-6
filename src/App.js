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
        await this.#readWinningNums();
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
    return price;
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

  async #readWinningNums() {
    const input_winningNums =
      await MissionUtils.Console.readLineAsync(WINNING_NUMBERS);
    let winningNums = input_winningNums
      .split(",")
      .map((num) => Number(num.trim()));
    const bonusNum = await MissionUtils.Console.readLineAsync(BONUS_NUM);
    this.#calculateResult(this.lottos, winningNums, bonusNum, this.price);
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

  #calculateResult(lottos, winningNums, bonusNum) {
    const results = this.#calculateWinning(lottos, winningNums, bonusNum);
    MissionUtils.Console.print(results);
  }
}

export default App;
