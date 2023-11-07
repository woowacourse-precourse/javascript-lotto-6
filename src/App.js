import { MissionUtils } from "@woowacourse/mission-utils";

const PRICE_MESSAGE = "구입금액을 입력해 주세요.\n";
const ERROR_PRICE_INPUT = "[ERROR] 숫자가 잘못된 형식입니다.\n";
const WINNING_NUMBERS = "\n당첨 번호를 입력해 주세요.\n";
const BONUS_NUM = "\n보너스 번호를 입력해 주세요.\n";

class App {
  async play() {
    await this.#controller();
  }
  async #controller() {
    while (true) {
      try {
        await this.#readPrice();
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
  }

  async #readPrice() {
    const input = await MissionUtils.Console.readLineAsync(PRICE_MESSAGE);
    const price = Number(input);
    if (price % 1000 !== 0) {
      throw new Error(ERROR_PRICE_INPUT);
    }
    this.#buyLotto(price / 1000);
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
    this.#readWinningNums();
  }

  async #readWinningNums() {
    const input_winningNums =
      await MissionUtils.Console.readLineAsync(WINNING_NUMBERS);
    let winningNums = input_winningNums
      .split(",")
      .map((num) => Number(num.trim()));
    const bonusNum = await MissionUtils.Console.readLineAsync(BONUS_NUM);
  }
}

export default App;
