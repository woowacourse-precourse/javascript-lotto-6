import { Console, Random } from "@woowacourse/mission-utils";
import Validate from "./Validate.js";
import Lotto from "./Lotto.js";

const validate = new Validate();
class App {
  LottoList = [];

  async start() {
    const price = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    validate.priceValidate(price);

    return price / 1000;
  }

  getLottoList(count) {
    let selectedNumber = [];
    for (let i = 0; i < count; i++) {
      selectedNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
      selectedNumber.sort((x, y) => x - y);

      this.LottoList.push(selectedNumber);
      Console.print(selectedNumber);
    }
  }

  async play() {
    const lottoCount = await this.start();
    Console.print(lottoCount + "개를 구매했습니다.");

    this.getLottoList(lottoCount);
  }
}

export default App;
