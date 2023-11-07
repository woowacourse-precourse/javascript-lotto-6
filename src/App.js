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
    const price = await MissionUtils.Console.readLineAsync(PRICE_MESSAGE);

    if (price % 1000 !== 0) {
      MissionUtils.Console.print(price);
      throw new Error(ERROR_PRICE_INPUT);
    }
  }
}

export default App;
