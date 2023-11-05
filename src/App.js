import { Console } from "@woowacourse/mission-utils";
import Validate from "./Validate.js";

const validate = new Validate();
class App {
  async start() {
    const price = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    validate.priceValidate(price);

    return price / 1000;
  }

  async play() {
    const count = await this.start();
    Console.print(count + "개를 구매했습니다.");
  }
}

export default App;
