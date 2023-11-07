import { MissionUtils } from "@woowacourse/mission-utils";

const PRICE_MESSAGE = "구입금액을 입력해 주세요.\n";
const ERROR_PRICE_INPUT = "[ERROR] 숫자가 잘못된 형식입니다.\n";

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
    MissionUtils.Console.print(count + "개를 구매했습니다.");
    lottos.forEach((lotto) => {
      MissionUtils.Console.print(`[${lotto.join(", ")}]`);
    });
  }
}

export default App;
